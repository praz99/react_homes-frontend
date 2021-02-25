import { DETAILS_FETCH_START, DETAILS_FETCH_SUCCESS, DETAILS_FETCH_FAILURE } from '../actions/index';

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAILS_FETCH_START:
      return { ...state, isLoading: true };
    case DETAILS_FETCH_SUCCESS:
      return {
        ...state, isLoading: false, houses: action.payload,
      };
    case DETAILS_FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default detailsReducer;
