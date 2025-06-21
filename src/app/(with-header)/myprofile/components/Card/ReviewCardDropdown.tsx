'use client';

import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import Dropdown from '@/components/Dropdown';

export default function ReviewCardDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <VerticalMoreIcon />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => console.log('수정')}>
          수정하기
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('삭제')}>
          삭제하기
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
