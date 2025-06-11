'use client';

import { createContext, useContext } from 'react';

import { cn } from '@/libs/cn';

interface MultiSelectContextType {
  selectedValues: (string | number)[];
  onSelectionChange: (value: (string | number)[]) => void;
  title?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

interface OptionProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: number | string;
  children?: React.ReactNode;
}

const MultiSelectContext = createContext<MultiSelectContextType | null>(null);

function useMultiSelectContext() {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error('<MultiSelect> 내부에서 사용되어야 합니다.');
  }
  return context;
}

/**
 * MultiSelect(다중 선택) 컴포넌트
 *
 * @description 여러 옵션 중에서 다수를 선택할 수 있는 체크박스 그룹 컴포넌트입니다.
 *
 * @param selectedValues - 현재 선택된 값들의 배열 (필수)
 * @param onSelectionChange - 선택 상태가 변경될 때 호출되는 콜백 함수 (필수)
 * @param title - 선택 그룹의 제목 (선택)
 * @param titleClassName - 제목 요소에 적용할 추가 CSS 클래스 (선택)
 * @param optionsClassName - 옵션들을 감싸는 컨테이너에 적용할 추가 CSS 클래스 (선택)
 * @param children - 하위 컴포넌트들 (MultiSelect.Option)
 *
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<string[]>([]);
 *
 * <MultiSelect
 *   selectedValues={selected}
 *   onSelectionChange={setSelected}
 *   title='WINE TYPES'
 * >
 *   <MultiSelect.Option value="red">Red</MultiSelect.Option>
 *   <MultiSelect.Option value="white">White</MultiSelect.Option>
 *   <MultiSelect.Option value="sparkling">Sparkling</MultiSelect.Option>
 * </MultiSelect>
 * ```
 *
 * @returns JSX.Element
 */
export default function MultiSelect({
  selectedValues = [],
  onSelectionChange,
  title,
  titleClassName,
  optionsClassName,
  children,
}: MultiSelectContextType & { optionsClassName?: string }) {
  return (
    <MultiSelectContext.Provider
      value={{ title, onSelectionChange, titleClassName, selectedValues }}
    >
      {title && <MultiSelect.Title />}
      <div className={cn('flex gap-2', optionsClassName)}>{children}</div>
    </MultiSelectContext.Provider>
  );
}

/**
 * MultiSelect.Title
 *
 * @description MultiSelect의 제목으로, 생략할 수 있습니다. 스타일 확장도 가능합니다.
 */
MultiSelect.Title = function Title() {
  const { title, titleClassName } = useMultiSelectContext();

  return <h2 className={cn('sub-title-text mb-4', titleClassName)}>{title}</h2>;
};

/**
 * toggleValue
 *
 * @description 다중 선택 컴포넌트에서 선택된 값들을 관리할 때 사용됩니다.
 *
 * @param isChecked - 체크박스가 체크된 상태인지 여부
 * @param currentValues - 현재 선택된 값들의 배열
 * @param value - 추가하거나 제거할 값 (문자열 또는 숫자)
 *
 * @returns 업데이트된 값들의 새로운 배열
 */
function toggleValue(
  isChecked: boolean,
  currentValues: (string | number)[],
  value: string | number,
): (string | number)[] {
  if (isChecked) {
    return [...currentValues, value];
  } else {
    return currentValues.filter((v) => v !== value);
  }
}

/**
 * MultiSelect.Option
 *
 * @description 다중 선택 그룹 내에서 선택 가능한 개별 옵션을 렌더링합니다.
 *
 * @param value - 옵션의 고유 값 (문자열 또는 숫자)
 * @param children - 옵션에 표시될 내용
 * @param props - HTML input 요소의 추가 속성들 (value, onChange 제외)
 *
 * @example
 * <MultiSelect.Option value="react">React</MultiSelect.Option>
 */
MultiSelect.Option = function Option({
  value,
  children,
  ...props
}: OptionProps) {
  const { selectedValues, onSelectionChange } = useMultiSelectContext();
  const isSelected = selectedValues.includes(value);

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isChecked = event.target.checked;
    const updatedValues = toggleValue(isChecked, selectedValues, value);
    onSelectionChange?.(updatedValues);
  };

  return (
    <label>
      <input
        checked={isSelected}
        className='peer hidden'
        name='multiSelectGroup'
        type='checkbox'
        value={value}
        onChange={handleSelectionChange}
        {...props}
      />
      <span className='sub-content-text peer-checked:bg-primary-100 peer-checked:border-primary-100 cursor-pointer rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 peer-checked:text-white'>
        {children}
      </span>
    </label>
  );
};
