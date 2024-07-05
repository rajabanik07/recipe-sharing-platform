/* eslint-disable prettier/prettier */
import { Router } from "express";
import { ratingController } from "@controllers/index";

const ratingRouter = Router();

ratingRouter.post('/:id',ratingController.addRatingController);

export {ratingRouter};