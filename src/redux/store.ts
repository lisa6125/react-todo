import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

export type AppDispatch = typeof store.dispatch;

export interface RootStore {
  userStatus: {
    user: string,
    loading: boolean,
    error: string,
    registerStatus:boolean
  },
  todoStatus: {
    todo: {
      id: number,
      content: string,
      completed_at: boolean,
    }[]
  }
}

