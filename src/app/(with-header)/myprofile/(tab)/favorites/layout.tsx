/**
 * FavoriteLayout 컴포넌트
 *
 * 인터셉팅 라우트에서 모달을 렌더링하기 위해 사용되는 레이아웃입니다.
 * `/myprofile/favorites` 경로에서 Card를 클릭했을 때,
 * 상세 페이지를 전체 페이지 전환 없이 모달로 띄우기 위해
 * 패럴렐 라우팅과 인터셉팅 라우팅을 함께 사용합니다.
 *
 * `children`(기본 페이지)과 `modal`(인터셉트된 모달 콘텐츠)을 동시에 렌더링합니다.
 */
export default function FavoriteLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
