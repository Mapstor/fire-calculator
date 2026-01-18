'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: LucideIcon;
  type?: 'text' | 'number' | 'currency' | 'percent';
  prefix?: string;
  suffix?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  type = 'text',
  prefix,
  suffix,
  helperText,
  error,
  disabled = false,
  required = false,
  className,
}: InputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputType = type === 'currency' || type === 'percent' ? 'text' : type;

  return (
    <div className={cn("space-y-1", className)}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="h-5 w-5" />
          </div>
        )}
        
        {prefix && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            {prefix}
          </div>
        )}
        
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-describedby={`${label}-description`}
          aria-invalid={!!error}
          className={cn(
            "w-full h-12 rounded-lg border border-gray-300",
            "text-base transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
            "hover:border-gray-400 disabled:hover:border-gray-300",
            Icon && "pl-10",
            prefix && !Icon && "pl-8",
            suffix && "pr-12",
            error && "border-red-300 focus:ring-red-500 focus:border-red-500",
            !Icon && !prefix && "px-3",
            "placeholder:text-gray-400"
          )}
          style={{ fontSize: '16px' }} // Prevent iOS zoom
        />
        
        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            {suffix}
          </div>
        )}
      </div>
      
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
      
      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}