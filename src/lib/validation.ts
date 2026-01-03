import { z } from 'zod';

export const PhoneloginFormSchema = z.object({
  phone_number: z
    .string()
    .min(1, 'Phone number is required')
    .refine(
      val => val?.replace(/\D/g, '')?.length >= 10,
      'Phone number must be at least 10 digits'
    ),
 
});

export const NameLoginForm = z.object({
  name: z.string().min(1, 'Name is required'),
})
