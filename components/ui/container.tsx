"use client"

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | 'full' | 'prose';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

const maxWidthClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  '8xl': 'max-w-8xl',
  full: 'max-w-full',
  prose: 'max-w-prose',
} as const;

const paddingClasses = {
  none: 'p-0',
  sm: 'p-4 sm:p-6',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-10',
  xl: 'p-10 sm:p-12',
} as const;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = 'div',
      size = 'xl',
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const maxWidthClass = maxWidthClasses[size] || maxWidthClasses.xl;
    const paddingClass = paddingClasses[padding] || paddingClasses.md;

    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto w-full',
          maxWidthClass,
          paddingClass,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export { Container };

// Container with responsive max-width and padding
interface ResponsiveContainerProps extends Omit<ContainerProps, 'size'> {
  size?: {
    base?: keyof typeof maxWidthClasses;
    sm?: keyof typeof maxWidthClasses;
    md?: keyof typeof maxWidthClasses;
    lg?: keyof typeof maxWidthClasses;
    xl?: keyof typeof maxWidthClasses;
    '2xl'?: keyof typeof maxWidthClasses;
  };
}

export function ResponsiveContainer({
  size = {
    base: 'full',
    sm: 'xl',
    md: '2xl',
    lg: '4xl',
    xl: '6xl',
    '2xl': '7xl',
  },
  className,
  children,
  ...props
}: ResponsiveContainerProps) {
  const sizeClasses = [];
  
  if (typeof size === 'object') {
    Object.entries(size).forEach(([breakpoint, sizeValue]) => {
      if (breakpoint === 'base') {
        sizeClasses.push(maxWidthClasses[sizeValue as keyof typeof maxWidthClasses]);
      } else {
        sizeClasses.push(
          `${breakpoint}:${maxWidthClasses[sizeValue as keyof typeof maxWidthClasses]}`
        );
      }
    });
  } else {
    sizeClasses.push(maxWidthClasses[size as keyof typeof maxWidthClasses]);
  }

  return (
    <Container
      className={cn(sizeClasses, className)}
      {...props}
    >
      {children}
    </Container>
  );
}

// Container with a max-width of 1280px (7xl)
export function ContainerXl({
  className,
  ...props
}: Omit<ContainerProps, 'size'>) {
  return (
    <Container size="7xl" className={className} {...props}>
      {props.children}
    </Container>
  );
}

// Container with a max-width of 1536px (8xl)
export function Container2xl({
  className,
  ...props
}: Omit<ContainerProps, 'size'>) {
  return (
    <Container size="8xl" className={className} {...props}>
      {props.children}
    </Container>
  );
}

// Container with no max-width (full width)
export function ContainerFull({
  className,
  ...props
}: Omit<ContainerProps, 'size'>) {
  return (
    <Container size="full" className={className} {...props}>
      {props.children}
    </Container>
  );
}
