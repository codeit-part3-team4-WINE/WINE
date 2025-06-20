/**
 * Default 컴포넌트
 *
 * 인터셉팅 라우트 슬롯(@modal)에 대응되는 기본 UI입니다.
 * 예: `/myprofile/favorites/@modal` 경로에 아무 것도 매칭되지 않았을 때 사용됩니다.
 *
 * 모달이 열리지 않은 기본 상태에서는 `null`을 반환하여 아무 것도 렌더링하지 않도록 합니다.
 * 이는 Next.js의 인터셉팅 라우팅 구조에서 슬롯(@modal)이 필수로 정의되어야 하기 때문에, 기본적으로 아무 것도 렌더링하지 않는 컴포넌트를 제공해야 합니다.
 */
export default function Default() {
  return null;
}
