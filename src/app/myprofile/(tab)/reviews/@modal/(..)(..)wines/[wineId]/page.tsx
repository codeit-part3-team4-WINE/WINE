'use client';

import Modal from '@/app/myprofile/components/CardModal';
import WinePage from '@/app/wines/[wineId]/page';

export default function WineDetailModalPage() {
  return (
    <Modal>
      <WinePage />
    </Modal>
  );
}
