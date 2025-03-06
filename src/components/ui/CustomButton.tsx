
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const CustomButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}: CustomButtonProps) => {
  const variantStyles = {
    primary: 'bg-tirupati-blue text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-tirupati-purple text-white hover:bg-purple-700 focus:ring-purple-300',
    accent: 'bg-tirupati-lightblue text-white hover:bg-blue-400 focus:ring-blue-200',
    outline: 'bg-transparent border border-current text-tirupati-blue hover:bg-tirupati-blue/5',
    ghost: 'bg-transparent hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'px-5 py-2.5 rounded-lg',
    lg: 'text-lg px-6 py-3 rounded-lg',
  };

  return (
    <button
      className={cn(
        'font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 button-hover-effect',
        variantStyles[variant],
        sizeStyles[size],
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
