/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
export interface IRecipe extends Sequelize.Model {
    id: number;
    title: string;
    description: string;
    cuisine: string;
    ingredients: string;
    difficultyLevel: string;
    userId: number;
  }

  export interface IAddNewRecipe {
    id: number;
    title: string;
    description: string;
    cuisine: string;
    ingredients: string;
    difficultyLevel: string;
    userId: number;
  }

  export interface IUpdateRecipe{
    id: number;
    title: string;
    description: string;
    cuisine: string;
    ingredients: string;
    difficultyLevel: string;
    userId: number;
  }

  export interface IGetCuisine {
    cuisine: string;
    difficultyLevel: string;
  }