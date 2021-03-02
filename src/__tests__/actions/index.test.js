import {
  authInit,
  authSuccess,
  authFailureSignup,
  authFailureLogin,
  dataFetchStart,
  dataFetchSuccessList,
  dataFetchSuccessDetails,
  dataFetchFailure,
} from '../../actions/index';

describe('actions', () => {
  describe('authInit', () => {
    it('returns an object with type property', () => {
      expect(authInit()).toEqual({ type: 'AUTH_INIT' });
    });
  });

  describe('authSuccess', () => {
    it('returns an object with type property', () => {
      expect(authSuccess()).toEqual({ type: 'AUTH_SUCCESS' });
    });
  });

  describe('authFailureSignup', () => {
    const error = '422 (Unprocessable Entity)';
    it('returns an object with type property and error message as payload', () => {
      expect(authFailureSignup(error)).toEqual({
        type: 'AUTH_FAILURE_SIGNUP',
        payload: error,
      });
    });
  });

  describe('authFailureLogin', () => {
    const error = '422 (Unprocessable Entity)';
    it('returns an object with type property and payload', () => {
      expect(authFailureLogin(error)).toEqual({
        type: 'AUTH_FAILURE_LOGIN',
        payload: error,
      });
    });
  });

  describe('dataFetchStart', () => {
    it('returns an object with type property', () => {
      expect(dataFetchStart()).toEqual({ type: 'DATA_FETCH_START' });
    });
  });

  describe('dataFetchSuccessList', () => {
    const data = {
      house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
    };
    it('returns an object with type property and payload', () => {
      expect(dataFetchSuccessList(data)).toEqual({
        type: 'DATA_FETCH_SUCCESS_LIST',
        payload: {
          house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
        },
      });
    });
  });

  describe('dataFetchSuccessDetails', () => {
    const data = {
      house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
    };
    it('returns an object with type property and payload', () => {
      expect(dataFetchSuccessDetails(data)).toEqual({
        type: 'DATA_FETCH_SUCCESS_DETAILS',
        payload: {
          house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
        },
      });
    });
  });

  describe('dataFetchFailure', () => {
    it('returns an object with type property', () => {
      expect(dataFetchFailure()).toEqual({ type: 'DATA_FETCH_FAILURE' });
    });
  });
});
