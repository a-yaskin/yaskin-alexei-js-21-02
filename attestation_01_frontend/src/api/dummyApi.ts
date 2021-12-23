import {
  APP_ID_FIELD,
  APP_ID_VALUE,
  BASE_URL,
  PAGE_FIELD,
  LIMIT_FIELD,
  USER_PATH,
  USER_CREATE_PATH,
  POST_PATH,
  COMMENT_PATH,
} from '../constants/api/dummyApi';
import { METHOD_GET, METHOD_POST, METHOD_PUT } from '../constants/api/common';
import {
  UserType,
  UserListResponse,
  PostType,
  PostListResponse,
  CommentListResponse,
  ResponseError,
} from '../types/api/dummyApiResponses';

const doGetRequest = <T>(
  path: string,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  // url.search = new URLSearchParams(searchParams).toString();
  // ?? https://developer.mozilla.org/en-US/docs/Web/API/URL_API
  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

const doPostRequest = <T>(
  path: string,
  body: T,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  const url = new URL(path, BASE_URL);
  const bodyJson = JSON.stringify(body);
  fetch(url.toString(), {
    method: METHOD_POST,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json',
    }),
    body: bodyJson,
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

const doPutRequest = <T>(
  path: string,
  body: T,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  const url = new URL(path, BASE_URL);
  const bodyJson = JSON.stringify(body);
  fetch(url.toString(), {
    method: METHOD_PUT,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json',
    }),
    body: bodyJson,
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

export const getUser = (
  id: string,
  callback: (resp: UserType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doGetRequest(`${USER_PATH}/${id}`,
  callback, errorCallback, finalCallback);

export const getUsers = (
  page: number,
  limit: number,
  callback: (resp: UserListResponse) => void,
  errorCallback?: (resp: any) => void,
  finalCallback?: () => void,
): void => doGetRequest(USER_PATH,
  callback, errorCallback, finalCallback,
  { [PAGE_FIELD]: page - 1, [LIMIT_FIELD]: limit });

export const createUser = (
  userData: UserType,
  callback: (resp: UserType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doPostRequest(USER_CREATE_PATH, userData,
  callback, errorCallback, finalCallback);

export const updateUser = (
  userId: string,
  userData: UserType,
  callback: (resp: UserType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doPutRequest(`${USER_PATH}/${userId}`, userData,
  callback, errorCallback, finalCallback);

export const getPostsByUser = (
  userId: string,
  page: number,
  limit: number,
  callback: (resp: PostListResponse) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doGetRequest(`${USER_PATH}/${userId}${POST_PATH}`,
  callback, errorCallback, finalCallback,
  { [PAGE_FIELD]: page - 1, [LIMIT_FIELD]: limit });

export const getPost = (
  postId: string,
  callback: (resp: PostType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doGetRequest(`${POST_PATH}/${postId}`,
  callback, errorCallback, finalCallback);

export const getPosts = (
  page: number,
  limit: number,
  callback: (resp: PostListResponse) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doGetRequest(POST_PATH,
  callback, errorCallback, finalCallback,
  { [PAGE_FIELD]: page - 1, [LIMIT_FIELD]: limit });

export const getCommentsByPost = (
  postId: string,
  page: number,
  limit: number,
  callback: (resp: CommentListResponse) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
): void => doGetRequest(`${POST_PATH}/${postId}${COMMENT_PATH}`,
  callback, errorCallback, finalCallback);

export const getComments = (
  page: number,
  limit: number,
  callback: (resp: CommentListResponse) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => doGetRequest(COMMENT_PATH,
  callback, errorCallback, finalCallback,
  { [PAGE_FIELD]: page - 1, [LIMIT_FIELD]: limit });
