import { CommentType, UserType } from './api/dummyApiResponses';

export interface Action {
  type: string;
}

export interface ListActionType extends Action {
  newRecord?: string;
}

export interface PostAction extends Action {
  text?: string;
}

export interface CommentsAction extends Action {
  commentList?: Array<CommentType>;
  loading?: boolean;
  error?: string;
}

export interface UsersAction extends Action {
  avatar?: Blob | any;
  users?: Array<UserType> | undefined;
  user?: UserType;
  posts?: any;
  id?: string;
  total?: number;
  page?: number;
  limit?: number;
  loading?: boolean;
  error?: string;
  edit?: boolean;
}

export interface CreateUserAction extends Action {
  id?: string;
  entity?: UserType;
  error?: string;
}

export interface AuthAction extends Action {
  auth?: boolean;
  user?: UserType;
  id?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  loading?: boolean;
  error?: string;
}
