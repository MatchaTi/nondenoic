import { cn } from '@/libs/utils';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IColors {
  primary: string;
  outline: string;
  transparent: string;
}

interface ISizes {
  none: string;
  sm: string;
  md: string;
  lg: string;
}

interface ICorners {
  full: string;
  sm: string;
  md: string;
  lg: string;
}

type ButtonProps = {
  className?: string;
  visibility?: string;
  children: React.ReactNode;
  color?: keyof IColors;
  size?: keyof ISizes;
  corner?: keyof ICorners;
  fullField?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const buttonStyle = ({ className, visibility, color, size, corner, fullField }: ButtonProps) => {
  const base = `${
    fullField == true && 'w-full'
  } flex items-center justify-center gap-2 font-semibold duration-150 ease-in-out`;

  const variants = {
    color: {
      primary: 'bg-nondenoic-main text-white hover:bg-nondenoic-secondary active:bg-nondenoic-main/50',
      outline:
        'bg-transparent text-nondenoic-main border-2 border-nondenoic-main hover:bg-nondenoic-main hover:text-white active:bg-nondenoic-main/50 active:border-opacity-0',
      transparent: 'bg-transparent text-nondenoic-main hover:text-nondenoic-secondary active:text-nondenoic-main/50',
    },
    size: {
      none: 'p-0',
      sm: 'px-2 py-1',
      md: 'px-4 py-2',
      lg: 'px-6 py-4',
    },
    corner: {
      full: 'rounded-full',
      sm: 'rounded-sm',
      md: 'rounded',
      lg: 'rounded-lg',
    },
  };

  return cn(
    base,
    variants.color[color || 'primary'],
    variants.size[size || 'md'],
    variants.corner[corner || 'md'],
    className!,
    visibility!
  );
};

export default function Button({
  children,
  className,
  visibility,
  color = 'primary',
  size = 'md',
  corner = 'md',
  fullField,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${buttonStyle({
        color,
        size,
        corner,
        className,
        visibility,
        fullField,
      } as ButtonProps)}`}
    >
      {children}
    </button>
  );
}
