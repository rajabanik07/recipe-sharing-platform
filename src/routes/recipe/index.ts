/* eslint-disable prettier/prettier */
import { Router } from "express";
import { recipeController } from "@controllers/index";

const recipeRouter = Router();

recipeRouter.post('/add',recipeController.addRecipeController);
recipeRouter.delete('/:id',recipeController.deleteRecipeController);
recipeRouter.put('/:id', recipeController.updateRecipeController);
recipeRouter.get('/cuisine',recipeController.getRecipesController);

export {recipeRouter};