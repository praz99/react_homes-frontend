import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/index';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, errors: [...state.errors, action.payload] };
    default:
      return state;
  }
};

export default loginReducer;
