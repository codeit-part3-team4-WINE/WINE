'use client';
import { useState } from 'react';

import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import Dropdown from '@/components/Dropdown';
import WineModal from '@/components/Modals/WineModal/WineModal';
interface Wine {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: string;
}

export default function CardDropdown({ wine }: { wine: Wine }) {
  const [wineIsOpen, setWineIsOpen] = useState(false);
  const handleDelete = () => console.log('삭제');
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <VerticalMoreIcon />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setWineIsOpen(true)}>
            수정하기
          </Dropdown.Item>
          <Dropdown.Item onClick={handleDelete}>삭제하기</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <WineModal
        isOpen={wineIsOpen}
        setIsOpen={setWineIsOpen}
        wineData={wine}
      />
    </>
  );
}
