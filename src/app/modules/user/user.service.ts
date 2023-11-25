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

// const updateUser = async (
//   id: number,
//   userData: IUser,
// ) => {
//   const result = await User.updateOne({ userId: id }, userData, {
//     new: true,
//     runValidators: true,
//   })

//   return result
// }
const updateUser = async (
  id: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ userId: id }, userData, {
    new: true,
    runValidators: true,
  })

  return result
}


// const deleteUserFromDB = async (id: number) => {
//   const result = await User.updateOne({ userId: id }, {isDeleted: true });
//   return result;
// };

const deleteUserFromDB = async (id: number) => {
  const result = await User.deleteOne({ userId: id })
  return result
}

export const userServices = {
  createUserIntoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUser,
  deleteUserFromDB,
};
