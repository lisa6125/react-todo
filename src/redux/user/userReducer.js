import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CHANGE_REGISTER_STATUS,
} from './userTypes';

const initialState = {
  loading: null,
  user: '',
  error: '',
  registerStatus: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        user: '',
        error: action.payload,
      };
    case CHANGE_REGISTER_STATUS:
      return {
        ...state,
        registerStatus: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
