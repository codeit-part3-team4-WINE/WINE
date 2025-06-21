'use client';

import Modal from '@/app/(with-header)/myprofile/components/CardModal';
import WinePage from '@/app/(with-header)/wines/[wineId]/page';

/**
 * WineDetailModalPage 컴포넌트
 *
 * 인터셉팅 라우팅을 통해 `Favorite` 페이지 위에 모달로 띄워지는 와인 상세 페이지입니다.
 *
 * `/myprofile/favorites/@modal/[wineId]` 경로에 해당하며,
 * 모달 UI를 감싸는 `Modal` 컴포넌트 안에 실제 와인 상세 페이지(`WinePage`)를 렌더링합니다.
 *
 * 페이지 전체 전환 없이 모달로 정보를 제공하는 UX를 구현하기 위해 사용됩니다.
 */
export default function WineDetailModalPage() {
  return (
    <Modal>
      <WinePage />
    </Modal>
  );
}
