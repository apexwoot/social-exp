import { addPostAC, updateNewPostInputAC } from '../../../../redux/profileReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPostInput: state.posts.newPostInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newInputOnChange: (input) => dispatch(updateNewPostInputAC(input)),
    addPost: () => dispatch(addPostAC()),
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
