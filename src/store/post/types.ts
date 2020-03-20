export type PostsState = {
  isFetching: boolean;
  data: UIPost[];
  error?: {
    message: string;
  };
};

export type UIPost = {
  id: number;
  title: string;
  body: string;
  comments: UIComment[];
  type: UIPostType;
};

type UIComment = {
  id: number;
  postId: number;
  body: string;
  type: UICommentType;
};

type UIPostType = 'info' | 'success' | 'error';
type UICommentType = 'info' | 'success' | 'error';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
  payload: {
    isFetching: boolean;
    error: {
      message: string;
    };
  };
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: {
    isFetching: boolean;
    data: UIPost[];
  };
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: {
    isFetching: boolean;
    error: {
      message: string;
    };
  };
}

export type PostsActionTypes =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
