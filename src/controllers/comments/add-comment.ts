/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { controller } from '../../config/controller/controller';
import { IAddComment } from '@modules/comments/model';
import CommentSchema from '@modules/comments/schema';
import { AddCommentService } from '@services/comments';

export const addCommentController = controller(
    async (req: Request, res: Response) => {
      const { id } = req.params; // get the id from the URL params
      const recipeId = parseInt(id, 10); // convert id to a number
      if (isNaN(recipeId)) {
        res.status(400).json({ message: 'Invalid recipe ID' });
        return;
      }
      const addCommentRequest: IAddComment = req.body;
      const commentService = new AddCommentService(CommentSchema);
      const comment = await commentService.addComment({...addCommentRequest, recipeId });
      res.status(201).send(comment);
    },
  );