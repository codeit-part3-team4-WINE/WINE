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

interface CardDropdownProps {
  wine?: Wine;
  onDeleteClick: () => void;
}

export default function CardDropdown({
  wine,
  onDeleteClick,
}: CardDropdownProps) {
  const [wineIsOpen, setWineIsOpen] = useState(false);
  const handleDelete = () => {
    console.log('삭제'); // 기존 로그 유지
    onDeleteClick(); // 부모에서 넘긴 모달 열기 실행
  };
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
