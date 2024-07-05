/* eslint-disable prettier/prettier */
import RecipeSchema from '@modules/recipe/schema';
import { IGetCuisine } from '@modules/recipe/model';

export const getRecipesService = async ({ cuisine, difficultyLevel }: IGetCuisine) => {
  const query: { [key: string]: string } = {};
  if (cuisine) {
    query.cuisine = cuisine;
  }

  if (difficultyLevel) {
    query.difficultyLevel = difficultyLevel;
  }

  const recipes = await RecipeSchema.findAll({ where: query });
  return recipes;
};
