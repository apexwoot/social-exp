import Posts from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.postsData,
  };
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
