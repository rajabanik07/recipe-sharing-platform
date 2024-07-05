/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import  RecipeSchema  from '@modules/recipe/schema';
import { IDeleteRecipe } from '@modules/ratings/model';
import CommentSchema from '@modules/comments/schema';
import RatingSchema from '@modules/ratings/schema';

export const deleteRecipeService = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id }: IDeleteRecipe = req.params as any;
      const recipe = await RecipeSchema.findByPk(id);
  
      if (!recipe) {
        return res.json({ message: 'Recipe not found' });
      }
      await Promise.all([
        CommentSchema.destroy({ where: { recipeId: id } }),
        RatingSchema.destroy({ where: { recipeId: id } }),
      ]);
  
      await recipe.destroy();
  
      res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      next(error);
    }
  };