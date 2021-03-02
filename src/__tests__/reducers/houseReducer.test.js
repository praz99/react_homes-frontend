import { dataFetchStart, dataFetchSuccessList, dataFetchSuccessDetails, dataFetchFailure } from '../../actions/index';
import houseReducer from '../../reducers/houseReducer';

describe('dataReducer', () => {
  const state = {
    house: {
      list: [],
      details: [],
    },
    isLoading: false,
    isError: false,
  };

  describe('action type is DATA_FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(houseReducer(state, dataFetchStart())).toEqual(
        {
          house: {
            list: [],
            details: [],
          },
          isLoading: true,
          isError: false,
        },
      );
    });
  });

  describe('action type is DATA_FETCH_SUCCESS_LIST', () => {
    const data = { houses: ['house 1', 'house 2'] };
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to houses list', () => {
      expect(houseReducer(state, dataFetchSuccessList(data.houses))).toEqual(
        {
          house: {
            list: ['house 1', 'house 2'],
            details: [],
          },
          isLoading: false,
          isError: false,
        },
      );
    });
  });

  describe('action type is DATA_FETCH_SUCCESS_DETAILS', () => {
    const data = { houses: ['house 1'] };
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to houses list', () => {
      expect(houseReducer(state, dataFetchSuccessDetails(data.houses))).toEqual(
        {
          house: {
            list: [],
            details: ['house 1'],
          },
          isLoading: false,
          isError: false,
        },
      );
    });
  });
  describe('action type is DATA_FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(houseReducer(state, dataFetchFailure())).toEqual(
        {
          house: {
            list: [],
            details: [],
          },
          isLoading: false,
          isError: true,
        },
      );
    });
  });
});
