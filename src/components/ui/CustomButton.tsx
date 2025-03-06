
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'solar';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isActive?: boolean;
}

const CustomButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'right',
  isActive = false,
  ...props
}: CustomButtonProps) => {
  const variantStyles = {
    primary: 'bg-tirupati-blue text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-tirupati-purple text-white hover:bg-purple-700 focus:ring-purple-300',
    accent: 'bg-tirupati-lightblue text-white hover:bg-blue-400 focus:ring-blue-200',
    outline: 'bg-white border-2 border-tirupati-blue text-tirupati-blue hover:bg-tirupati-blue/5 hover:border-tirupati-blue/80',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
    solar: 'bg-solar-green text-white hover:bg-green-600 focus:ring-green-300',
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'px-5 py-2.5 rounded-lg',
    lg: 'text-lg px-6 py-3 rounded-lg',
  };

  const activeStyles = isActive ? 'ring-2 ring-offset-2' : '';

  return (
    <button
      className={cn(
        'font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 button-hover-effect shadow-sm',
        variantStyles[variant],
        sizeStyles[size],
        activeStyles,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;
