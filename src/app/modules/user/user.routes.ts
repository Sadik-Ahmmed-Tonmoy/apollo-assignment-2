import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:userId', userController.getSingleUser);
router.delete('/api/users/:userId', userController.deleteUser);

export const userRoutes = router;
