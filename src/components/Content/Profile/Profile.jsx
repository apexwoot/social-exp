import React from 'react';
import NewPostContainer from './NewPost/NewPostContainer';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import UserDetails from './UserDetails/UserDetails';

const Profile = (props) => {
  return (
    <div className={s.contentWrapper}>
      <UserDetails />
      <NewPostContainer />
      <PostsContainer />
    </div>
  );
};

export default Profile;
