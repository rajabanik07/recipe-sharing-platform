import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { recipeRouter } from './recipe';
import { commentRouter } from './comments';
import { ratingRouter } from './rating';
const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/recipe', recipeRouter);
v1Router.use('/comment', commentRouter);
v1Router.use('/rating', ratingRouter);
// All routes go here

export { v1Router };
