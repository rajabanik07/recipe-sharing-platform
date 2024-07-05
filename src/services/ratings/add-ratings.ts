/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { IRating } from '@modules/ratings/model';
import { IAddRating } from '@modules/ratings/model';

export class AddRatingService {
  private ratingModel: any;

  constructor(ratingModel: any) {
    this.ratingModel = ratingModel;
  }

  async addRating(createRatingRequest: IAddRating): Promise<IRating> {
    const rating = new this.ratingModel(createRatingRequest);
    return rating.save();
  }
}