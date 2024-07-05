/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { IRecipe } from '../recipe/model';
import { IUser } from '../users/model';
import { sequelize } from '../../config/database/sql';
import { IComment } from './model';

const CommentSchema = sequelize.define<IComment>(
  'comments',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
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

export default CommentSchema;
