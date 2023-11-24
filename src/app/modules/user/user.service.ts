import { User } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDb = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};
const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserFromDB = async (id: number) => {
  const result = await User.findOne({ userId: id });
  return result;
};

export const userServices = {
  createUserIntoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
