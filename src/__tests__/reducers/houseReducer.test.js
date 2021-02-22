import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../../actions/index';
import houseReducer from '../../reducers/houseReducer';

describe('dataReducer', () => {
  const state = {
    houses: [],
    isLoading: false,
    isError: false,
  };

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(houseReducer(state, dataFetchStart())).toEqual(
        {
          houses: [],
          isLoading: true,
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_SUCCESS', () => {
    const data = { houses: ['house 1', 'house 2'] };
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to houses', () => {
      expect(houseReducer(state, dataFetchSuccess(data.houses))).toEqual(
        {
          houses: ['house 1', 'house 2'],
          isLoading: false,
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(houseReducer(state, dataFetchFailure())).toEqual(
        {
          houses: [],
          isLoading: false,
          isError: true,
        },
      );
    });
  });
});
