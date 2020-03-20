import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './types';

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: {
      isFetching: true,
      error: undefined,
    },
  };
};

export const fetchPostsSuccess = (data: any) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      isFetching: false,
      data,
    },
  };
};

export const fetchPostsFailure = (message: string) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: {
      isFetching: false,
      error: {
        message,
      },
    },
  };
};
