'use client';

import Modal from '@/app/(with-header)/myprofile/components/CardModal';
import WinePage from '@/app/(with-header)/wines/[wineId]/page';

export default function WineDetailModalPage() {
  return (
    <Modal>
      <WinePage />
    </Modal>
  );
}
