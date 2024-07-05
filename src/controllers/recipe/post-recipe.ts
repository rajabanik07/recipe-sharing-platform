/* eslint-disable prettier/prettier */
import { Request, Response, } from 'express';
import { controller } from '../../config/controller/controller';
import { IAddNewRecipe } from '@modules/recipe/model';
import RecipeSchema from '@modules/recipe/schema';
import { AddRecipeService } from '@services/recipe';

export const addRecipeController = controller(
    async (req: Request, res: Response) => {
      const addRecipeRequest: IAddNewRecipe = req.body;
      const recipeService = new AddRecipeService(RecipeSchema);
      const recipe = await recipeService.addRecipe(addRecipeRequest);
      res.status(201).send(recipe);
    },
  );
