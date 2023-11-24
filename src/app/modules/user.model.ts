import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IUser } from './user/user.interface';

const fullNameSchema = new Schema<IFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: fullNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [String, String],
  address: addressSchema,
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);
