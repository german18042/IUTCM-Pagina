"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  target,
  rel,
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary',
    outline: 'border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary',
  };
  
  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-6 py-3 text-lg',
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  const content = (
    <motion.span
      className="flex items-center justify-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }
  
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};
