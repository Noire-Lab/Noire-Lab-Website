import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  variant: 'filled' | 'outline';
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'filled',
  className,
  ...props
}) => {
  const baseStyles: ButtonProps['className'] =
    'flex items-center justify-center rounded-[63px] px-[40px] leading-[20px] cursor-pointer';

  const styles = (
    type: ButtonProps['variant'],
  ): ButtonProps['className'] => {
    switch (type) {
      case 'filled':
        return 'bg-purple text-white';
      case 'outline':
        return 'border-[3px] border-solid border-white text-white';
    }
  };

  return (
    <button
      className={clsx(baseStyles, styles(variant), className)}
      {...props}
    >
      {children}
    </button>
  );
};
