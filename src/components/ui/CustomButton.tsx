
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
    primary: 'bg-solar-blue text-white hover:bg-blue-700 focus:ring-blue-300',
    secondary: 'bg-solar-green text-white hover:bg-green-700 focus:ring-green-300',
    accent: 'bg-solar-yellow text-black hover:bg-yellow-400 focus:ring-yellow-300',
    outline: 'bg-transparent border border-current text-solar-blue hover:bg-solar-blue/5',
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
