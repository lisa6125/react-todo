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

export const registerAndSignInFetchUsers = (form) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .post('https://todoo.5xcamp.us/users', form)
      .then((response) => {
        toast.success(response.data.message);
        dispatch(changeRegisterStatus(true));
        dispatch(signInFetchUsers(form));
      })
      .catch((error) => {
        toast.error(
          error.response.data.message + ',' + error.response.data.error
        );
        dispatch(fetchUsersFailure(error.response.data.message));
      });
  };
};

export const signInFetchUsers = (form) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .post('https://todoo.5xcamp.us/users/sign_in', form)
      .then((response) => {
        const user = response.data.nickname;
        toast.success(response.data.message);
        Cookies.set('token', response.headers.authorization);
        dispatch(fetchUsersSuccess(user));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch(fetchUsersFailure(error.response.data.message));
      });
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
