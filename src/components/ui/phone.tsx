'use client';

import React from 'react';
import PhoneInput2, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string, country?: CountryData) => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  defaultCountry?: string;
  className?: string;
}

export const PhoneInput = ({ value, onChange, disabled, readOnly, placeholder, defaultCountry = 'ca', className }: PhoneInputProps) => {
  return (
    <div
      className={cn(
        'relative flex items-center rounded-md border border-input bg-transparent transition-all',
        disabled && 'opacity-70 cursor-not-allowed bg-muted',
        className
      )}
    >

      <PhoneInput2
        country={defaultCountry.toLowerCase()}
        value={value}
        onChange={(val, data) => {
          if (!disabled) {
            // Ensure the value always starts with +
            const formattedVal = val && !val.startsWith('+') ? `+${val}` : val;
            onChange?.(formattedVal, data as CountryData);
          }
        }}
        disableCountryGuess={true}
        enableSearch={!disabled}
        countryCodeEditable={false}
        disableDropdown={disabled}
        excludeCountries={['us']}
        inputProps={{
          disabled,
          readOnly,
          placeholder,
        }}
        containerClass='!w-full !bg-transparent !flex !items-center'
        buttonClass={cn('rounded-l-md border-0 bg-transparent hover:bg-muted focus:outline-none focus:ring-0 px-3 py-2 flex items-center', readOnly && 'cursor-default')}
        inputClass={cn('!w-full !bg-transparent !text-sm !border-0 !shadow-none focus:outline-none px-2', disabled && '!cursor-not-allowed')}
        dropdownClass='!z-50 !rounded-md !shadow-md !border !border-border !bg-white !text-black'
      />
    </div>
  );
};
