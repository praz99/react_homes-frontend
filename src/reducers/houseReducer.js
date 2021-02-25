import { DATA_FETCH_START, DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE } from '../actions/index';

const houseReducer = (state = {}, action) => {
  switch (action.type) {
    case DATA_FETCH_START:
      return { ...state, isLoading: true };
    case DATA_FETCH_SUCCESS:
      return {
        ...state, isLoading: false, houses: action.payload,
      };
    case DATA_FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default houseReducer;
