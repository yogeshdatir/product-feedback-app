import express from 'express';

import commentsController from '../controllers/commentsController';

const {
  getAllComments,
  getCommentById,
  getCommentByFeedbackId,
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
commentRouter.get('/feedback/:feedbackId', getCommentByFeedbackId);

export default commentRouter;
