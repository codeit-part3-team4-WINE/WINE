'use client';

import React from 'react';

/**
 * === Slot이란? ===
 * Slot은 컴포넌트의 자식 요소를 동적으로 대체하거나 병합할 수 있도록 도와주는 패턴입니다. (보통 asChild와 함께 사용됩니다.)
 * Slot을 통해 컴포넌트 외부에서 정의한 자식 요소에 props를 덮어씌우면서 더 유연하게 제어할 수 있습니다.
 * 쉽게 말해, children으로 전달 받은 자식 요소에 원하는 기능(이벤트 핸들러, 스타일 등)을 추가하기 위해 사용합니다.
 */

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>; // 범용적으로 HTMLElement 속성 전부를 받도록 타입 단언
}

export type RenderDelegationProps<T> = T & {
  asChild?: boolean;
};

/**
 * mergeProps
 *
 * @description Slot 컴포넌트(부모 컴포넌트)와 자식 요소의 props를 병합합니다.
 * @description 이벤트 핸들러는 중첩 실행되도록, `className`과 `style`은 합쳐지도록 처리합니다.
 *
 * @param {React.HTMLAttributes<HTMLElement>} slotProps - Slot 컴포넌트에서 전달된 props
 * @param {React.HTMLAttributes<HTMLElement>} childProps - 자식 요소에 전달된 props
 * @returns {React.HTMLAttributes<HTMLElement>} 병합된 props
 */
function mergeProps(
  slotProps: React.HTMLAttributes<HTMLElement>,
  childProps: React.HTMLAttributes<HTMLElement>,
): React.HTMLAttributes<HTMLElement> {
  const overrideProps = { ...childProps };

  // Child prop 순회
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    // on으로 시작되는 이벤트 핸들러일 때
    const isHandler = /^on[A-Z]/.test(propName);

    if (isHandler) {
      // 둘 다 존재하는 경우 두 핸들러가 같이 실행될 수 있도록 병합
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      }
      // Slot에만 존재할 때는 그것을 사용
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }
    // style prop인 경우 Slot과 Child의 style을 병합
    else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    }
    // className prop 병합
    else if (propName === 'className') {
      overrideProps[propName] = [childPropValue, slotPropValue]
        .filter(Boolean)
        .join(' ');
    }
  }

  return { ...slotProps, ...overrideProps };
}

/**
 * Slottable
 *
 * @component
 * @description Slot 내에서 특정 자식 요소를 구분하기 위해 사용되는 Wrapper 컴포넌트입니다.
 *
 * @example
 * ```tsx
 * <Slot>
 *   <Slottable>
 *     <button>Click me</button>
 *   </Slottable>
 * </Slot>
 * ```
 */
export interface SlottableProps {
  children: React.ReactNode;
}

export const Slottable = ({ children }: SlottableProps) => {
  return children;
};

/**
 * Slot
 *
 * @component
 * @description asChild 패턴 구현을 위한 Slot 컴포넌트입니다. (`ref`는 지원하지 않습니다.)
 * @description `Slottable`로 래핑된 자식 컴포넌트를 찾아 해당 요소에 props를 병합하여 렌더링합니다.
 *
 * @param {React.ReactElement} children - 하나의 React 엘리먼트를 자식으로 받습니다. (`Slottable`로 감쌀 수 있습니다.)
 * @param {...React.HTMLAttributes<HTMLElement>} props - 병합할 HTML 속성들
 *
 * @example
 * ```tsx
 * <Slot onClick={() => console.log('slot')}>
 *   <Slottable>
 *     <button onClick={() => console.log('child')}>버튼</button>
 *   </Slottable>
 * </Slot>
 * ```
 * => console : "child" 출력 -> "slot" 출력
 */
export const Slot = ({ children, ...props }: SlotProps) => {
  const childrenArray = React.Children.toArray(children);
  const slottable = childrenArray.find((child) => {
    return React.isValidElement(child) && child.type === Slottable;
  }) as React.ReactElement<SlottableProps>;

  if (slottable && React.isValidElement(slottable.props.children)) {
    const newElement = slottable.props.children as React.ReactElement<
      React.HTMLAttributes<HTMLElement>
    >;
    const newChildren = childrenArray.map((child) => {
      if (child !== slottable) return child;

      if (React.isValidElement(newElement)) {
        return newElement.props.children;
      } else {
        console.warn(
          'Slot component should have only one React element as a child',
        );
      }

      return null;
    });

    return React.isValidElement(newElement)
      ? React.cloneElement(
          newElement,
          {
            ...props,
            ...newElement.props,
            ...(mergeProps(
              props,
              newElement.props,
            ) as React.HTMLAttributes<HTMLElement>),
          },
          newChildren,
        )
      : null;
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ...(mergeProps(
        props,
        children.props,
      ) as React.HTMLAttributes<HTMLElement>),
    });
  }

  console.warn('Slot component should have only one React element as a child');

  return null;
};
