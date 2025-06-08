'use client';

import React from 'react';

/**
 * ===================
 * mergeProps
 * ===================
 *  */
function mergeProps(
  slotProps: React.HTMLAttributes<HTMLElement>,
  childProps: React.HTMLAttributes<HTMLElement>,
): React.HTMLAttributes<HTMLElement> {
  // 우선 Child prop을 넣어준다
  const overrideProps = { ...childProps };

  // Child prop을 순회하면서
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);

    // on으로 시작되는 이벤트 핸들러일 때
    if (isHandler) {
      // 둘 다 존재하는 경우 두 핸들러가 같이 실행될 수 있도록 합쳐준다
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      }
      // 만약 Slot에만 존재하면 그것만 사용한다
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }
    // style prop인 경우 Slot과 Child의 style을 합쳐준다
    else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    }
    // className prop도 마찬가지로 합쳐준다
    else if (propName === 'className') {
      overrideProps[propName] = [childPropValue, slotPropValue]
        .filter(Boolean)
        .join(' ');
    }
  }

  return { ...slotProps, ...overrideProps };
}

/**
 * ===================
 * Slottable
 * ===================
 *  */
export interface SlottableProps {
  children: React.ReactNode;
}

export const Slottable = ({ children }: SlottableProps) => {
  return children;
};

// Slot
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>; // 범용적으로 HTMLElement 속성 전부를 받도록 타입 단언
}

export type RenderDelegationProps<T> = T & {
  asChild?: boolean;
};

/**
 * ===================
 * Slot : ref 제외
 * ===================
 *  */
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
