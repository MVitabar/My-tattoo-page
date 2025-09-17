import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClass?: string;
  innerClass?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      className,
      containerClass,
      innerClass,
      fullWidth = false,
      noPadding = false,
      noPaddingTop = false,
      noPaddingBottom = false,
      children,
      ...props
    },
    ref
  ) => {
    const paddingClasses = cn({
      'px-4 sm:px-6 lg:px-8': !fullWidth && !noPadding,
      'py-12 md:py-16 lg:py-20 xl:py-24': !noPadding && !noPaddingTop && !noPaddingBottom,
      'pt-12 md:pt-16 lg:pt-20 xl:pt-24': !noPaddingTop && (noPadding || noPaddingBottom),
      'pb-12 md:pb-16 lg:pb-20 xl:pb-24': !noPaddingBottom && (noPadding || noPaddingTop),
    });

    return (
      <Component
        ref={ref}
        className={cn('relative w-full', className)}
        {...props}
      >
        <div
          className={cn(
            'mx-auto w-full',
            !fullWidth && 'max-w-7xl',
            paddingClasses,
            containerClass
          )}
        >
          <div className={cn('relative', innerClass)}>{children}</div>
        </div>
      </Component>
    );
  }
);

Section.displayName = 'Section';

export { Section };

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  className?: string;
  titleClass?: string;
  subtitleClass?: string;
  descriptionClass?: string;
  center?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  titleClass,
  subtitleClass,
  descriptionClass,
  center = false,
  as: Heading = 'h2',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12 lg:mb-16',
        center && 'text-center mx-auto',
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-wider text-primary',
            center ? 'mx-auto' : 'ml-1',
            subtitleClass
          )}
        >
          {subtitle}
        </p>
      )}
      <Heading
        className={cn(
          'mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl',
          center && 'mx-auto',
          titleClass
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-3xl text-lg text-gray-600',
            center && 'mx-auto',
            descriptionClass
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  fullWidth?: boolean;
}

export function SectionContent({
  className,
  fullWidth = false,
  children,
  ...props
}: SectionContentProps) {
  return (
    <div
      className={cn(
        'w-full',
        !fullWidth && 'mx-auto max-w-4xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
