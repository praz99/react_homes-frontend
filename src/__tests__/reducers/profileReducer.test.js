import { profileFetchStart, profileFetchSuccess, profileFetchFailure } from '../../actions/index';
import profileReducer from '../../reducers/profileReducer';

describe('profileReducer', () => {
  const state = {
    isLoading: false,
    user: [],
    appointments: [],
    isError: false,
  };

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(profileReducer(state, profileFetchStart())).toEqual(
        {
          isLoading: true,
          user: [],
          appointments: [],
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_SUCCESS', () => {
    const data = { user: 'username', appointments: 'appointment-1' };
    it('returns state after setting "isLoading" and "isError" to "false" and payload data to user and appointments', () => {
      expect(profileReducer(state, profileFetchSuccess(data))).toEqual(
        {
          isLoading: false,
          user: data.user,
          appointments: data.appointments,
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(profileReducer(state, profileFetchFailure())).toEqual(
        {
          isLoading: false,
          user: [],
          appointments: [],
          isError: true,
        },
      );
    });
  });
});
