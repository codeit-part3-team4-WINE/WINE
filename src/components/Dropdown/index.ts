import { DropdownWrapper } from './Dropdown';
import { DropdownItem } from './Dropdown.Item';
import { DropdownMenu } from './Dropdown.Menu';
import { DropdownTrigger } from './Dropdown.Trigger';

const Dropdown = Object.assign(DropdownWrapper, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
});

export default Dropdown;
