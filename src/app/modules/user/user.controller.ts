/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userServices } from './user.service';
import zodUserValidation from './userZodValidation';
import { IOrder } from './user.interface';

const createUser = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.userId);
    const result = await userServices.getSingleUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const id: number = parseInt(req.params.userId);
    const result = await userServices.updateUser(id, userData);
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.userId);
    const result = await userServices.deleteUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const addOrderItemToUser = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const id: number = parseInt(req.params.userId);
    const result = await userServices.addOrderItemToDB(id, orderData);

    res.status(200).json({
      status: 'success',
      message: 'Order created successfully!',
      data: result.orders,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(404).json({
        status: 'fail',
        message: error.message,
      });
    } else {
      res.status(500).json({
        status: 'fail',
        message: error.message || 'Something went wrong',
      });
    }
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrderItemToUser,
};
