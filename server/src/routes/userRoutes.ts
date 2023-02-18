import express from 'express';

import userController from '../controllers/userController';

const { getAllUsers, getUserById, addUser, updateUser, deleteUser } =
  userController;

const userRouter = express.Router();

userRouter
  .get('/', getAllUsers)
  .post('/', addUser)
  .put('/', updateUser)
  .delete('/', deleteUser);

userRouter.get('/:id', getUserById);

export default userRouter;
