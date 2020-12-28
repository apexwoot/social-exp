import { addPost, updateNewPostInput } from '../../../../redux/profileReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPostInput: state.posts.newPostInput,
  };
};

const NewPostContainer = connect(mapStateToProps, { updateNewPostInput, addPost })(NewPost);

export default NewPostContainer;
