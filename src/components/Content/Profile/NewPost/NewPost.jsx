import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  const newInputOnChange = (e) => {
    props.updateNewPostInput(e.target.value);
  };

  const addPost = () => {
    props.addPost();
  };

  return (
    <div className={s.newPostWrapper}>
      <div>
        <textarea onChange={newInputOnChange} value={props.newPostInput} className={s.newPostInput}></textarea>
      </div>
      <div>
        <button onClick={addPost} className={s.submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPost;
