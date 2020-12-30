import React from 'react';
import NewPostContainer from './NewPost/NewPostContainer';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import UserDetailsContainer from './UserDetails/UserDetailsContainer';

const Profile = (props) => {
  console.log(props);
  return (
    <div className={s.contentWrapper}>
      <UserDetailsContainer />
      <NewPostContainer />
      <PostsContainer />
    </div>
  );
};

export default Profile;
