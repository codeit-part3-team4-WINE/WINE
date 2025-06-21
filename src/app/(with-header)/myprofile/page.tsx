import { redirect } from 'next/navigation';

export default function MyProfilePage() {
  // 사용자가 /myprofile로 접근했을 때 기본 탭인 /myprofile/reviews로 리다이렉트
  redirect('/myprofile/reviews');
}
