import React from 'react';
import s from './Content.module.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Route path="/profile" render={() => <ProfileContainer />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
    </div>
  );
};

export default Content;
