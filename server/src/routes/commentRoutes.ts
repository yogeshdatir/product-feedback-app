import express from 'express';

import commentsController from '../controllers/commentsController';

const {
  getAllComments,
  getCommentById,
  addComment,
  updateComment,
  deleteComment,
} = commentsController;

const commentRouter = express.Router();

commentRouter
  .get('/', getAllComments)
  .post('/', addComment)
  .put('/', updateComment)
  .delete('/', deleteComment);

commentRouter.get('/:id', getCommentById);

export default commentRouter;
