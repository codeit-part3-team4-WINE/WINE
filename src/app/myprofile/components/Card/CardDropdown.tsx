'use client';
import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import Dropdown from '@/components/Dropdown';

export default function CardDropdown() {
  const handleModify = () => console.log('수정');
  const handleDelete = () => console.log('삭제');
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <VerticalMoreIcon />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleModify}>수정하기</Dropdown.Item>
        <Dropdown.Item onClick={handleDelete}>삭제하기</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
