import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PostsActionTypes,
} from './types';

export const initialState = {
  isFetching: false,
  data: [],
  error: undefined,
};

export default (state = initialState, action: PostsActionTypes) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        data: action.payload.data,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
