import { signupInit, signupFailure, signupSuccess } from '../../actions/index';
import signupReducer from '../../reducers/signupReducer';

describe('signupReducer', () => {
  const state = {
    isLoading: false,
    errors: [],
  };

  describe('action type is AUTH_INIT', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(signupReducer(state, signupInit())).toEqual(
        {
          isLoading: true,
          errors: [],
        },
      );
    });
  });

  describe('action type is AUTH_SUCCESS', () => {
    it('returns state after setting "isLoading" to "false"', () => {
      expect(signupReducer(state, signupSuccess())).toEqual(
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
      expect(signupReducer(state, signupFailure(data))).toEqual(
        {
          isLoading: false,
          errors: ['error1', 'error2'],
        },
      );
    });
  });
});
