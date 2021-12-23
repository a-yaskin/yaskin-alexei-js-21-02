export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface OwnerType {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
}

export interface UserType {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  registerDate?: string;
  phone?: string;
  picture?: string;
}

export interface UserListResponse extends ListResponseType<OwnerType> {
}

export interface PostType {
  id?: string;
  text?: string;
  image?: string;
  likes?: number;
  link?: string;
  tags?: Array<string>;
  publishDate?: string;
  owner?: OwnerType;
}

export interface PostListResponse extends ListResponseType<PostType> {
}

export interface CommentType {
  id?: string;
  message?: string;
  owner?: OwnerType;
  post?: string;
  publishDate?: string;
}

export interface CommentListResponse extends ListResponseType<CommentType> {
}

export interface ResponseError {
  error: string;
}
