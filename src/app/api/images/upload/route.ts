import axios, { AxiosError } from 'axios';
import FormData from 'form-data'; // node 전용 form-data
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

import { ServerErrorResponse } from '@/types/error';

/**
 * 이미지 업로드 (POST)
 *
 * 클라이언트에서 업로드된 파일을 받아 외부 API 서버(`/images/upload`)에 전달하고,
 * 응답을 그대로 클라이언트에 반환합니다.
 *
 * - 최대 5MB 이하 파일만 허용
 * - 확장자를 유지한 채 파일명을 타임스탬프로 변경
 *
 */
export async function POST(req: Request) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    // 클라이언트로부터 formData 파싱
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: '파일이 존재하지 않습니다.' },
        { status: 400 },
      );
    }

    // 브라우저 File → Node.js Buffer 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    //  업로드 파일 크기 제한 (5MB 초과 시 오류 반환)
    const form = new FormData();
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: '5MB 이하 파일만 업로드 가능합니다.' },
        { status: 400 },
      );
    }

    // 파일 확장자 유지한 새로운 파일명 생성 (타임스탬프 기반)
    // 서버 저장 시 기존 파일명과 충돌 방지 및 고유성 확보를 위해 업로드 시점의 timestamp를 파일명으로 사용
    const ext = file.name.split('.').pop();
    const safeFileName = `${Date.now()}.${ext}`;

    form.append('image', Readable.from(buffer), {
      filename: safeFileName,
      contentType: file.type,
    });

    // API 서버에 이미지 업로드 요청
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/images/upload`,
      form,
      {
        headers: {
          ...form.getHeaders(), // form-data가 Content-Type과 boundary를 포함한 헤더를 자동 생성
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      },
    );

    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '유저 정보 조회 실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
}
