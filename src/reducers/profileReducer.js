import { PROFILE_FETCH_START, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_FAILURE } from '../actions/index';

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_FETCH_START:
      return { ...state, isLoading: true };
    case PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        appointments: action.payload.appointments,
      };
    case PROFILE_FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default profileReducer;
