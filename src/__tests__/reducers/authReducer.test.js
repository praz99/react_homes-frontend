import authReducer from '../../reducers/authReducer';
import { authInit, authSuccess, authFailureSignup, authFailureLogin } from '../../actions/index';

describe('authReducer', () => {
  const state = {
    isLoading: false,
    errors: {
      signupErrors: [],
      loginErrors: [],
    },
  };

  describe('action type is AUTH_INIT', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(authReducer(state, authInit())).toEqual(
        {
          isLoading: true,
          errors: {
            signupErrors: [],
            loginErrors: [],
          },
        },
      );
    });
  });

  describe('action type is AUTH_SUCCESS', () => {
    it('returns state after setting "isLoading" to "false"', () => {
      expect(authReducer(state, authSuccess())).toEqual(
        {
          isLoading: false,
          errors: {
            signupErrors: [],
            loginErrors: [],
          },
        },
      );
    });
  });

  describe('action type is AUTH_FAILURE_SIGNUP', () => {
    const data = ['error1', 'error2'];
    it('returns state after setting "isLoading" to "false" and payload data to errors', () => {
      expect(authReducer(state, authFailureSignup(data))).toEqual(
        {
          isLoading: false,
          errors: {
            signupErrors: [...state.errors.signupErrors, data],
            loginErrors: [],
          },
        },
      );
    });
  });

  describe('action type is AUTH_FAILURE_LOGIN', () => {
    const data = ['error1', 'error2'];
    it('returns state after setting "isLoading" to "false" and payload data to errors', () => {
      expect(authReducer(state, authFailureLogin(data))).toEqual(
        {
          isLoading: false,
          errors: {
            signupErrors: [],
            loginErrors: [...state.errors.loginErrors, data],
          },
        },
      );
    });
  });
});
