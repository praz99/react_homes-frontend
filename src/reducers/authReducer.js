import {
  AUTH_INIT, AUTH_SUCCESS, AUTH_FAILURE_SIGNUP, AUTH_FAILURE_LOGIN,
} from '../actions/index';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return { ...state, isLoading: true };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false };
    case AUTH_FAILURE_SIGNUP:
      return {
        ...state,
        isLoading: false,
        errors: {
          loginErrors: [],
          signupErrors: [...state.errors.signupErrors, action.payload],
        },
      };
    case AUTH_FAILURE_LOGIN:
      return {
        ...state,
        isLoading: false,
        errors: {
          signupErrors: [],
          loginErrors: [...state.errors.loginErrors, action.payload],
        },
      };
    default:
      return state;
  }
};

export default authReducer;
