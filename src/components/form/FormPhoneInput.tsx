'use client';

import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';
import { Controller, FieldValues } from 'react-hook-form';
import { PhoneInput } from '../ui/phone';


const FormPhoneInput = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  disabled = false,
  readOnly = false,
  labelClassName,
  star,
  className,
  rules = {},
  error = null,
}: FormInputProps<T>) => {


  return (
    <div className='grid w-full items-center gap-1.5'>
      {label && (
        <Label className={cn('text-grey-color-3 font-normal text-sm', labelClassName)}>
          {label} {star && <span className='text-red-600'>*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <PhoneInput
              value={field.value || ''}
              onChange={val => field.onChange(val)}
              defaultCountry={"IN"}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder}
              className={cn((error || fieldState.invalid) && 'border-destructive', className)}
            />
            {(error || fieldState.error) && (
              <p className='font-medium mt-1 text-xs text-red-500'>{typeof error === 'string' ? error : error?.message || fieldState.error?.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormPhoneInput;
