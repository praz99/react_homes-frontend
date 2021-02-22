import { loginInit, loginFailure, loginSuccess } from '../../actions/index';
import loginReducer from '../../reducers/loginReducer';

describe('loginReducer', () => {
  const state = {
    isLoading: false,
    errors: [],
  };

  describe('action type is AUTH_INIT', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(loginReducer(state, loginInit())).toEqual(
        {
          isLoading: true,
          errors: [],
        },
      );
    });
  });

  describe('action type is AUTH_SUCCESS', () => {
    it('returns state after setting "isLoading" to "false"', () => {
      expect(loginReducer(state, loginSuccess())).toEqual(
        {
          isLoading: false,
          errors: [],
        },
      );
    });
  });

  describe('action type is AUTH_FAILURE', () => {
    const data = ['error1', 'error2'];
    it('returns state after setting "isLoading" to "false" and payload data to errors', () => {
      expect(loginReducer(state, loginFailure(data))).toEqual(
        {
          isLoading: false,
          errors: ['error1', 'error2'],
        },
      );
    });
  });
});
