import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        appointments: action.payload.appointments,
      };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default profileReducer;
