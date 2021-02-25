import { SIGNUP_INIT, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/index';

const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_INIT:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false };
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, errors: [...state.errors, action.payload] };
    default:
      return state;
  }
};

export default signupReducer;
