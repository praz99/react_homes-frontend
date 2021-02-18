import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';

const houseReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return {
        ...state, isLoading: false, houses: action.payload,
      };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default houseReducer;
