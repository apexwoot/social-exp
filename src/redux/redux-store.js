import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  posts: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
