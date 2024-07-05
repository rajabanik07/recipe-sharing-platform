/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import { deleteRecipeService } from '@services/recipe/delete-recipe-by-id';

export const deleteRecipeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteRecipeService(req, res, next);
  } catch (error) {
    next(error);
  }
};