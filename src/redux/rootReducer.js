import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import todoReducer from './todo/todoReducer';

const rootReducer = combineReducers({
  userStatus: userReducer,
  todoStatus: todoReducer,
});

export default rootReducer;
