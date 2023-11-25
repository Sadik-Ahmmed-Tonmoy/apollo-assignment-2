import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IUser } from './user/user.interface';

const fullNameSchema = new Schema<IFullName>({
  firstName: { type: String, trim:true, required: [true, 'First name is required'] },
  lastName: { type: String , trim:true, },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: [true, 'Street is required'] },
  city: { type: String, required: [true, 'City is required'] },
  country: { type: String, required: [true, 'Country is required'] },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: [true, 'User ID is required'] },
  username: { type: String, required: [true, 'Username is required'] },
  password: { type: String, required: [true, 'Password is required'] },
  fullName: {
    type: fullNameSchema,
    required: [true, 'Full name is required'],
  },
  age: { type: Number, required: [true, 'Age is required'] },
  email: { type: String,trim:true,  required: [true, 'Email is required'] },
  isActive: { type: Boolean, required: [true, 'isActive is required'] },
  hobbies: [String, String],
  address: {
    type: addressSchema,
    required: [true, 'Address is required'],
  },
});

// Create a Model.
export const User = model<IUser>('User', userSchema);
