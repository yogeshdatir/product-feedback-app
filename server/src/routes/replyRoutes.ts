import express from 'express';

import repliesController from '../controllers/repliesController';

const { getAllReplies, getReplyById, addReply, updateReply, deleteReply } =
  repliesController;

const replyRouter = express.Router();

replyRouter
  .get('/', getAllReplies)
  .post('/', addReply)
  .put('/', updateReply)
  .delete('/', deleteReply);

replyRouter.get('/:id', getReplyById);

export default replyRouter;
