import SelectBoxWrapper from './SelectBox';
import Option from './SelectBox.Option';
import Options from './SelectBox.Options';
import Trigger from './SelectBox.Trigger';

/**
 * 공통 SelectBox 컴포넌트
 *
 * SelectBox에 Trigger, Options, Option 서브 컴포넌트를 포함한 구조로 사용됩니다.
 *
 * @example
 * <CommonSelectBox options={['A', 'B']} onChange={(v) => console.log(v)}>
 *   <CommonSelectBox.Trigger />
 *   <CommonSelectBox.Options>
 *     <CommonSelectBox.Option value="A" />
 *     <CommonSelectBox.Option value="B" />
 *   </CommonSelectBox.Options>
 * </CommonSelectBox>
 */
export const SelectBox = Object.assign(SelectBoxWrapper, {
  Trigger,
  Options,
  Option,
});
