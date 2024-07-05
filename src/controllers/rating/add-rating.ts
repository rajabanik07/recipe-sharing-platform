/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { controller } from '../../config/controller/controller';
import { IAddRating } from '@modules/ratings/model';
import RatingSchema from '@modules/ratings/schema';
import { AddRatingService } from '@services/ratings';

export const addRatingController = controller(
    async (req: Request, res: Response) => {
      const { id } = req.params; // get the id from the URL params
      const recipeId = parseInt(id, 10); // convert id to a number
      if (isNaN(recipeId)) {
        res.status(400).json({ message: 'Invalid recipe ID' });
        return;
      }
      const addRatingRequest: IAddRating = req.body;
      const ratingService = new AddRatingService(RatingSchema);
      const rating = await ratingService.addRating({...addRatingRequest, recipeId });
      res.status(201).send(rating);
    },
  );