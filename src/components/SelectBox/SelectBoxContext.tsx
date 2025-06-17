import { createContext, useContext } from 'react';

export interface SelectBoxContextType {
  isOpen: boolean;
  selected: string;
  toggle: () => void;
  close: () => void;
  setSelected: (value: string) => void;
  onChange: (value: string) => void;
  hasChanged: boolean;
  setHasChanged: (value: boolean) => void;
}

export const SelectBoxContext = createContext<SelectBoxContextType | null>(
  null,
);

export const useSelectedBoxContext = () => {
  const context = useContext(SelectBoxContext);
  if (!context)
    throw new Error(' <SelectBox> 컴포넌트 내부에서만 사용해야 합니다.');
  return context;
};
