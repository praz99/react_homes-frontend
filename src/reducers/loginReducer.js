import { AUTH_INIT, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/index';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return { ...state, isLoading: true };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false };
    case AUTH_FAILURE:
      return { ...state, isLoading: false, errors: [...state.errors, action.payload] };
    default:
      return state;
  }
};

export default loginReducer;
