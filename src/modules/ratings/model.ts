/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
export interface IRating extends Sequelize.Model {
  id: number;
  rating: number;
  recipeId: number;
  userId: number;
}

export interface IAddRating {
  id: number;
  rating: number;
  recipeId: number;
  userId: number;

}
export interface IDeleteRecipe {
    id: number;
  }
