import React from 'react';
import s from './Content.module.css';
import { Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Route exact path="/profile" render={() => <Profile />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
    </div>
  );
};

export default Content;
