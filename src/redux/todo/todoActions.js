// 提示
import toast from 'react-hot-toast';

import { FETCH_SET_TODOLIST } from './todoTypes';

// api js
import getTodoList from '../../api/getTodoList';
import addTodo from '../../api/addTodo';
import toggleTodo from '../../api/toggleTodo';
import deleteTodo from '../../api/deleteTodo';
import deleteAlreadyDown from '../../api/deleteAlreadyDown';

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
      let todoList = store.todoStatus.todo;
      let res = await addTodo(content);
      res.completed_at = null;
      todoList.push(res);
      dispatch(setTodoInStore(todoList));
    } catch (err) {
      toast.error(err.response);
    }
  };
};

export const fetchToggleTodo = (store, id) => {
  return async (dispatch) => {
    try {
      const todoList = store.todoStatus.todo;
      const res = await toggleTodo(id);
      todoList.map((item) => {
        if (item.id === id) {
          item.completed_at = res.completed_at;
        }
      });
      dispatch(setTodoInStore(todoList));
    } catch (err) {
      toast.error(err.response);
    }
  };
};

export const fetchDeleteTodo = (store, id) => {
  return async (dispatch) => {
    try {
      const todoList = store.todoStatus.todo;
      await deleteTodo(id);
      todoList.forEach((element, index) => {
        if (element.id == id) {
          todoList.splice(index, 1);
        }
      });

      dispatch(setTodoInStore(todoList));
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  };
};

export const fetchDeleteAlreadyDownTodo = (store) => {
  return async (dispatch) => {
    try {
      const todoList = store.todoStatus.todo;
      let ids = [];
      const newTodoList = todoList.filter((element) => {
        return !element.completed_at;
      });
      todoList.forEach((element, index) => {
        if (element.completed_at) {
          ids.push(element.id);
        }
      });
      await deleteAlreadyDown(ids);

      dispatch(setTodoInStore(newTodoList));
    } catch (err) {
      console.log(err);
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
