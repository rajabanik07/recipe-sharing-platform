/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { IRecipe } from '../recipe/model';
import { IUser } from '../users/model';
import { sequelize } from '../../config/database/sql';
import { IRating } from './model';

const RatingSchema = sequelize.define<IRating>(
  'ratings',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    recipeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'recipes',
        key: 'id',
      },
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

export default RatingSchema;

