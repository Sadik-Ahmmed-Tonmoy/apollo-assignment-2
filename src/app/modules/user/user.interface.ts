import { Schema, model, connect } from 'mongoose';

interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
}

export default IUser;
