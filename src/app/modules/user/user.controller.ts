/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import zodUserValidation from './userZodValidation';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    // const {error, value} = userJoiSchema.validate(user);

    const zodParseData = zodUserValidation.parse(user);

    const result = await userServices.createUserIntoDb(zodParseData);

    // if(error) {
    //   res.status(400).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details[0].message
    //   });
    // }

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id: number = parseInt(req.params.userId);
    const result = await userServices.getSingleUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const id: number = parseInt(req.params.userId);
    const result = await userServices.updateUser(id, userData);
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully!',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = parseInt(req.params.userId);
    const result = await userServices.deleteUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const addOrderItemToUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderData = req.body;
    const id: number = parseInt(req.params.userId);
    await userServices.addOrderItemToDB(id, orderData);

    res.status(200).json({
      status: 'success',
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error: any) {
    next(error);
  }
};

const getOrdersOfSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id: number = parseInt(req.params.userId);
    const result = await userServices.getOrdersSingleUserFromDB(id);

    res.status(200).json({
      status: 'success',
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrderItemToUser,
  getOrdersOfSingleUser
};
