/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import { updateRecipeService } from '@services/recipe/update-recipe';

export const updateRecipeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateRecipeService(req, res, next);
  } catch (error) {
    next(error);
  }
};