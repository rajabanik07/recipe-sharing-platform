/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';

export interface IComment extends Sequelize.Model {
  id: number;
  comment: string;
  recipeId: number;
  userId: number;
}

export interface IAddComment {
  id: number;
  comment: string;
  recipeId: number;
  userId: number;
}
