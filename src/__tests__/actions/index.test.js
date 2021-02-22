import {
  signupInit,
  signupSuccess,
  signupFailure,
  loginInit,
  loginSuccess,
  loginFailure,
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
  detailsFetchStart,
  detailsFetchSuccess,
  detailsFetchFailure,
} from '../../actions/index';

describe('actions', () => {
  describe('signupInit', () => {
    it('returns an object with type property', () => {
      expect(signupInit()).toEqual({ type: 'AUTH_INIT' });
    });
  });

  describe('signupSuccess', () => {
    it('returns an object with type property', () => {
      expect(signupSuccess()).toEqual({ type: 'AUTH_SUCCESS' });
    });
  });

  describe('signupFailure', () => {
    const error = '422 (Unprocessable Entity)';
    it('returns an object with type property and payload', () => {
      expect(signupFailure(error)).toEqual({
        type: 'AUTH_FAILURE',
        payload: error,
      });
    });
  });

  describe('loginInit', () => {
    it('returns an object with type property', () => {
      expect(loginInit()).toEqual({ type: 'AUTH_INIT' });
    });
  });

  describe('loginSuccess', () => {
    it('returns an object with type property', () => {
      expect(loginSuccess()).toEqual({ type: 'AUTH_SUCCESS' });
    });
  });

  describe('loginFailure', () => {
    const error = '422 (Unprocessable Entity)';
    it('returns an object with type property and payload', () => {
      expect(loginFailure(error)).toEqual({
        type: 'AUTH_FAILURE',
        payload: error,
      });
    });
  });

  describe('dataFetchStart', () => {
    it('returns an object with type property', () => {
      expect(dataFetchStart()).toEqual({ type: 'FETCH_START' });
    });
  });

  describe('dataFetchSuccess', () => {
    const data = {
      house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
    };
    it('returns an object with type property and payload', () => {
      expect(dataFetchSuccess(data)).toEqual({
        type: 'FETCH_SUCCESS',
        payload: {
          house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
        },
      });
    });
  });

  describe('dataFetchFailure', () => {
    it('returns an object with type property', () => {
      expect(dataFetchFailure()).toEqual({ type: 'FETCH_FAILURE' });
    });
  });

  describe('detailsFetchStart', () => {
    it('returns an object with type property', () => {
      expect(detailsFetchStart()).toEqual({ type: 'FETCH_START' });
    });
  });

  describe('detailsFetchSuccess', () => {
    const data = {
      house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
    };
    it('returns an object with type property and payload', () => {
      expect(detailsFetchSuccess(data)).toEqual({
        type: 'FETCH_SUCCESS',
        payload: {
          house_type: 'villa', number_of_rooms: 12, price: 100000, description: 'House description',
        },
      });
    });
  });

  describe('detailsFetchFailure', () => {
    it('returns an object with type property', () => {
      expect(detailsFetchFailure()).toEqual({ type: 'FETCH_FAILURE' });
    });
  });
});
