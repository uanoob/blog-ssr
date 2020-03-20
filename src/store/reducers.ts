import { combineReducers } from 'redux';
import posts, { initialState as PostsState } from './post/reducer';

export const initialState = {
  posts: PostsState,
};

export default combineReducers({
  posts,
});
