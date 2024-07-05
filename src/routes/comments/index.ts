/* eslint-disable prettier/prettier */
import { Router } from "express";
import { commentController } from "@controllers/index";

const commentRouter = Router();

commentRouter.post('/:id',commentController.addCommentController);

export {commentRouter};