import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { PostsState } from './types';
import API_URI from '../../config';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from './actions';

interface AppState {
  posts: PostsState;
}

export type Thunk = ThunkAction<void, AppState, unknown, Action<string>>;

export const fetchPosts = (): Thunk => async dispatch => {
  dispatch(fetchPostsRequest());
  try {
    const { data } = await axios.get(`${API_URI}/posts`);
    dispatch(fetchPostsSuccess(data));
  } catch (err) {
    dispatch(fetchPostsFailure(err));
  }
};
