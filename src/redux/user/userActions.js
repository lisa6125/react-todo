import axios from 'axios';
// 提示
import toast from 'react-hot-toast';
//plugin
import Cookies from 'js-cookie';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CHANGE_REGISTER_STATUS,
} from './userTypes';

// api js
import registerUser from '../../api/registerUser';
import signInUser from '../../api/signInUser';
import logOutUser from '../../api/logOutUser';

export const registerAndSignInFetchUsers = (form) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const res = await registerUser(form);
      toast.success(res.data.message);
      dispatch(changeRegisterStatus(true));
      dispatch(signInFetchUsers(form));
    } catch (err) {
      toast.error(`${err.response.data.message},${err.response.data.error}`);
      dispatch(fetchUsersFailure(err.response.data.message));
    }
  };
};

export const signInFetchUsers = (form) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const res = await signInUser(form);
      const user = res.data.nickname;
      toast.success(res.data.message);
      Cookies.set('token', res.headers.authorization);
      dispatch(fetchUsersSuccess(user));
    } catch (err) {
      toast.error(err.response.data.message);
      dispatch(fetchUsersFailure(err.response.data.message));
    }
  };
};

export const logOutFetchUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const res = await logOutUser();
      toast.success(res.data.message);
      dispatch(fetchUsersSuccess(''));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const changeRegisterStatus = (status) => {
  return {
    type: CHANGE_REGISTER_STATUS,
    payload: status,
  };
};
