/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { getRecipesService } from '@services/recipe/filter-recipe';

export const getRecipesController = async (req: Request, res: Response) => {
  const cuisine = req.query.cuisine as string | undefined;
  const difficultyLevel = req.query.difficultyLevel as string | undefined;

  if (cuisine === undefined && difficultyLevel === undefined) {
    res.status(400).json({ message: 'At least one filter is required' });
    return;
  }

  const cuisineValue = cuisine ?? '';
  const difficultyLevelValue = difficultyLevel ?? '';

  const recipes = await getRecipesService({ cuisine: cuisineValue, difficultyLevel: difficultyLevelValue });

  if (!recipes || recipes.length === 0) {
    res.status(404).json({ message: 'No recipes found matching the filter criteria' });
  } else {
    res.json(recipes);
  }
};