/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../user.model';
import { IOrder, IUser } from './user.interface';

const createUserIntoDb = async (user: IUser) => {
  const result = await User.create(user);
  const userData = await User.findOne(
    { userId: result.userId },
    {
      _id: 0,
      password: 0,
      'fullName._id': 0,
      'address._id': 0,
      orders: 0,
      __v: 0,
    },
  );
  return userData;
};
const getAllUsersFromDB = async () => {
  const result = await User.find(
    {},
    {
      userId: 0,
      _id: 0,
      password: 0,
      'fullName._id': 0,
      'address._id': 0,
      isActive: 0,
      hobbies: 0,
      orders: 0,
      __v: 0,
    },
  );
  return result;
};
const getSingleUserFromDB = async (id: number) => {
  const result = await User.findOne(
    { userId: id },
    {
      _id: 0,
      password: 0,
      'fullName._id': 0,
      'address._id': 0,
      orders: 0,
      __v: 0,
    },
  );
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
  }).select({
    _id: 0,
    password: 0,
    'fullName._id': 0,
    'address._id': 0,
    orders: 0,
    __v: 0,
  });

  return result;
};

// const deleteUserFromDB = async (id: number) => {
//   const result = await User.updateOne({ userId: id }, {isDeleted: true });
//   return result;
// };

const deleteUserFromDB = async (id: number) => {
  const result = await User.deleteOne({ userId: id });
  return result;
};

const addOrderItemToDB = async (id: number, orderData: IOrder) => {
  try {
    const user = await User.findOne({ userId: id });

    if (!user) {
      throw new Error('User not found');
    }

    user.orders.push(orderData);

    const result = await user.save();
    return result;
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong');
  }
};

export const userServices = {
  createUserIntoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUser,
  deleteUserFromDB,
  addOrderItemToDB,
};
