import { CommentsAction } from '../types/actions';
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS } from '../constants/actions/comments';
import { CommentType } from '../types/api/dummyApiResponses';

export const loadAction = (): CommentsAction => ({
  type: LOAD_COMMENTS,
});

export const loadSuccessAction = (comments: Array<CommentType>): {
  commentsList: Array<CommentType>;
  type: string
} => ({
  type: LOAD_COMMENTS_SUCCESS,
  commentsList: comments,
});
