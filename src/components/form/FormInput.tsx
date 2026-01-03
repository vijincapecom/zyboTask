'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import { Controller, FieldValues } from 'react-hook-form';

const FormInput = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  placeholder = '',
  disabled = false,
  className = '',
  rules = {},
  error = null,
  icon,
  labelClassName = '',
  errorClassName,
  onChange,
  star = false,
  recommended = false,
}: FormInputProps<T>) => {
  return (
    <div className='grid w-full items-center gap-1.5 relative'>
      {label && (
        <Label className={`text-white font-medium text-[12px] ${labelClassName}`}>
          {label} {star && <span className='text-red-600'>*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <div className='relative w-full'>
              {icon && <span className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center'>{icon}</span>}

              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={cn(icon && 'pl-10', className)}
                onChange={e => {
                  field.onChange(e);
                  onChange?.(e);
                }}
              />
            </div>

            {recommended && (
              <div className='absolute -bottom-5 w-full flex justify-end'>
                <p className='mt-1 text-xs text-grey-color-3 font-medium '>Recommended 60 characters</p>
              </div>
            )}
            {(error || fieldState.error) && (
              <div className={cn(errorClassName)}>
                <p className='mt-1 text-xs text-red-600 font-medium'>{typeof error === 'string' ? error : error?.message || fieldState.error?.message}</p>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormInput;
