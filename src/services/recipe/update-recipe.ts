/* eslint-disable prettier/prettier */
import { IUpdateRecipe } from "@modules/recipe/model";
import RecipeSchema from "@modules/recipe/schema";
import { NextFunction, Request, Response } from "express";

/* eslint-disable prettier/prettier */
export const updateRecipeService = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id }: IUpdateRecipe = req.params as any;
      const { title, description, ingredients, cuisine, difficultyLevel, userId } = req.body;
  
      const recipe = await RecipeSchema.findByPk(id);
  
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
  
      // Update recipe fields
      recipe.title = title;
      recipe.description = description;
      recipe.ingredients = ingredients;
      recipe.cuisine = cuisine;
      recipe.difficultyLevel = difficultyLevel;
      recipe.userId = userId;
  
      await recipe.save();
  
      res.json({ message: 'Recipe updated successfully' });
    } catch (error) {
      next(error);
    }
  };