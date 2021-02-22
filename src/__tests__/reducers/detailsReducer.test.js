import { detailsFetchStart, detailsFetchSuccess, detailsFetchFailure } from '../../actions/index';
import detailsReducer from '../../reducers/detailsReducer';

describe('detailsReducer', () => {
  const state = {
    houses: [],
    isLoading: false,
    isError: false,
  };

  describe('action type is FETCH_START', () => {
    it('returns a state after setting "isLoading" to "true"', () => {
      expect(detailsReducer(state, detailsFetchStart())).toEqual({
        houses: [],
        isLoading: true,
        isError: false,
      });
    });
  });

  describe('action type is FETCH_SUCCESS', () => {
    const data = { houses: ['house 1', 'house 2'] };
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to houses', () => {
      expect(detailsReducer(state, detailsFetchSuccess(data.houses))).toEqual(
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
      expect(detailsReducer(state, detailsFetchFailure())).toEqual(
        {
          houses: [],
          isLoading: false,
          isError: true,
        },
      );
    });
  });
});
