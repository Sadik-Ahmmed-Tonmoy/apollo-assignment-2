import { z } from 'zod';

const fullNameSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name must be at least 1 character long' })
    .max(50, { message: 'First name cannot exceed 50 characters' })
    .trim(),
  lastName: z
    .string()
    .min(1, { message: 'Last name must be at least 1 character long' })
    .max(50, { message: 'Last name cannot exceed 50 characters' })
    .trim(),
});

const addressSchema = z.object({
  street: z
    .string()
    .min(1, { message: 'Street must be at least 1 character long' })
    .max(100, { message: 'Street cannot exceed 100 characters' }),
  city: z
    .string()
    .min(1, { message: 'City must be at least 1 character long' })
    .max(50, { message: 'City cannot exceed 50 characters' }),
  country: z
    .string()
    .min(1, { message: 'Country must be at least 1 character long' })
    .max(50, { message: 'Country cannot exceed 50 characters' }),
});

const zodUserValidation = z.object({
  userId: z.number().int(),
  username: z
    .string()
    .min(1, { message: 'Username must be at least 1 character long' })
    .max(50, { message: 'Username cannot exceed 50 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(100, { message: 'Password cannot exceed 100 characters' }),
  fullName: fullNameSchema,
  age: z
    .number()
    .min(1, { message: 'Age must be at least 1' })
    .max(120, { message: 'Age cannot exceed 120' }),
  email: z.string().email({ message: 'Invalid email format' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressSchema,
  // orders: z.array(z.string(), z.number(), z.number()),
  // isDeleted: z.boolean()
});

export default zodUserValidation;
