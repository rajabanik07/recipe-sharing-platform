/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { IUser } from '../users/model';
import { sequelize } from '../../config/database/sql';
import { IRecipe } from './model';

const RecipeSchema = sequelize.define<IRecipe>(
  'recipes',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    cuisine: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ingredients: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    difficultyLevel: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    timestamps: true,
  },
);

export default RecipeSchema;
