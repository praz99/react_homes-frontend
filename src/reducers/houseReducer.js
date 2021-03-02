import {
  DATA_FETCH_START, DATA_FETCH_SUCCESS_LIST, DATA_FETCH_SUCCESS_DETAILS, DATA_FETCH_FAILURE,
} from '../actions/index';

const houseReducer = (state = {}, action) => {
  switch (action.type) {
    case DATA_FETCH_START:
      return { ...state, isLoading: true };
    case DATA_FETCH_SUCCESS_LIST:
      return {
        ...state,
        isLoading: false,
        house: {
          list: action.payload,
          details: [],
        },
      };
    case DATA_FETCH_SUCCESS_DETAILS:
      return {
        ...state,
        isLoading: false,
        house: {
          list: [],
          details: action.payload,
        },
      };
    case DATA_FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default houseReducer;
