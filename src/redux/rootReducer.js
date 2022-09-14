import { combineReducers } from 'redux';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  userStatus: userReducer,
});

export default rootReducer;
