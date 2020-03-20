import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/post/thunk';
import { UIPost } from '../store/post/types';
import PostsList from '../components/PostsList';

const Blog = ({ posts, fetchPosts }: Props) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return posts.length !== 0 ? <PostsList posts={posts} /> : null;
};

interface StateProps {
  posts: UIPost[];
}

interface DispatchProps {
  fetchPosts: any;
}

type Props = StateProps & DispatchProps;

const mapState = (state: any) => ({
  posts: state.posts.data,
});

const mapDispatch = {
  fetchPosts,
};

export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(Blog);
