import { FETCH_SET_TODOLIST } from './todoTypes';

const initialState = {
  todo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SET_TODOLIST: {
      return {
        todo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
