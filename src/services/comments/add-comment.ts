/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { IComment } from '@modules/comments/model';
import { IAddComment } from '@modules/comments/model';

export class AddCommentService {
  private commentModel: any;

  constructor(commentModel: any) {
    this.commentModel = commentModel;
  }

  async addComment(createCommentRequest: IAddComment): Promise<IComment> {
    const comment = new this.commentModel(createCommentRequest);
    return comment.save();
  }
}