// 提示
import toast from 'react-hot-toast';

import { FETCH_SET_TODOLIST } from './todoTypes';

// api js
import getTodoList from '../../api/getTodoList';
import addTodo from '../../api/addTodo';

export const fetchDataTodo = () => {
  return async (dispatch) => {
    try {
      let res = await getTodoList();
      res = res.reverse();
      dispatch(setTodoInStore(res));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
};

export const fetchAddTodo = (store, content) => {
  return async (dispatch) => {
    try {
      await addTodo(content);
      dispatch(fetchDataTodo());
    } catch (err) {
      toast.error(err.response);
    }
  };
};

export const setTodoInStore = (todo) => {
  return {
    type: FETCH_SET_TODOLIST,
    payload: todo,
  };
};