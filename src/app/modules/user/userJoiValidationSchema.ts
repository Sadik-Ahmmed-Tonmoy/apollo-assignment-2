import Joi from 'joi';

// Define Joi schemas for nested objects
const fullNameJoiSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required',
  }),
  lastName: Joi.string().trim().messages({
    'string.empty': 'Last name cannot be empty',
  }),
});

const addressJoiSchema = Joi.object({
  street: Joi.string().required().messages({
    'string.empty': 'Street is required',
  }),
  city: Joi.string().required().messages({
    'string.empty': 'City is required',
  }),
  country: Joi.string().required().messages({
    'string.empty': 'Country is required',
  }),
});

// Define the Joi schema for the user
const userJoiSchema = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'User ID must be a number',
    'any.required': 'User ID is required',
  }),
  username: Joi.string().required().messages({
    'string.empty': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
  fullName: fullNameJoiSchema.required().messages({
    'any.required': 'Full name is required',
  }),
  age: Joi.number().required().messages({
    'number.base': 'Age must be a number',
    'any.required': 'Age is required',
  }),
  email: Joi.string().trim().required().messages({
    'string.empty': 'Email is required',
  }),
  isActive: Joi.boolean().required().messages({
    'boolean.base': 'isActive must be a boolean value',
    'any.required': 'isActive is required',
  }),
  hobbies: Joi.array().items(Joi.string()).messages({
    'array.base': 'Hobbies must be an array',
  }),
  address: addressJoiSchema.required().messages({
    'any.required': 'Address is required',
  }),
});

export default userJoiSchema;
