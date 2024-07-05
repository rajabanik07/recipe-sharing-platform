/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { IRecipe } from '@modules/recipe/model';
import { IAddNewRecipe } from '@modules/recipe/model';

export class AddRecipeService {
  private recipeModel: any;

  constructor(recipeModel: any) {
    this.recipeModel = recipeModel;
  }

  async addRecipe(createRecipeRequest: IAddNewRecipe): Promise<IRecipe> {
    const recipe = new this.recipeModel(createRecipeRequest);
    return recipe.save();
  }
}