import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, dataFetchStart } from '../actions/index';

const profileReducer = (state= {}, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, user: action.payload.user, appointments: action.payload.appointments };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
  }
};

export default profileReducer;
