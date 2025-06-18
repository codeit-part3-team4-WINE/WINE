/**
 * @example
 * // 페이지별 메시지 맵 정의
 * const userMessageMap = {
 *   404: '해당 유저를 찾을 수 없습니다.',
 *   401: '로그인이 필요합니다.',
 *   500: '서버 오류가 발생했습니다.',
 * };
 *
 * // 에러 발생 시 throw
 * throw new ApiErrorClass(status, userMessageMap, '유저 정보를 불러오지 못했습니다.');
 *
 * // error.tsx 등에서 사용 예시
 * if (error instanceof ApiErrorClass) {
 *   console.log(error.status); // 상태코드
 *   console.log(error.message); // 사용자에게 보여줄 메시지
 * }
 */
type StatusMessageMap = { [status: number]: string };

//페이지별 api 요청 에러처리용 클래스
export class ApiErrorClass extends Error {
  status?: number;

  constructor(
    status?: number,
    messageMap?: StatusMessageMap,
    defaultMessage?: string,
  ) {
    let message = defaultMessage ?? '알 수 없는 오류가 발생했습니다.';
    if (status && messageMap && messageMap[status]) {
      message = messageMap[status];
    }
    super(message);
    this.name = 'ApiErrorClass';
    this.status = status;
  }
}
