
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

const CustomButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'right',
  loading = false,
  fullWidth = false,
  disabled,
  ...props
}: CustomButtonProps) => {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-solar-blue to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-300 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-solar-green to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-green-300 shadow-lg hover:shadow-xl',
    accent: 'bg-gradient-to-r from-solar-yellow to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-500 focus:ring-yellow-300 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-solar-blue text-solar-blue hover:bg-solar-blue hover:text-white focus:ring-blue-300 shadow-md hover:shadow-lg',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900',
    gradient: 'bg-gradient-to-r from-solar-blue via-solar-green to-solar-yellow text-white hover:scale-105 focus:ring-blue-300 shadow-lg hover:shadow-2xl',
  };

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'px-6 py-3 rounded-lg text-base',
    lg: 'text-lg px-8 py-4 rounded-xl',
    xl: 'text-xl px-10 py-5 rounded-xl',
  };

  return (
    <button
      className={cn(
        'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-offset-2 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {icon && iconPosition === 'left' && !loading && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && !loading && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;
