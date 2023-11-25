import { Request, Response } from 'express';
import { userServices } from './user.service';
import zodUserValidation from './userZodValidation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
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

    res.status(200).json({
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

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser
};
