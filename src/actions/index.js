export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE_SIGNUP = 'AUTH_FAILURE_SIGNUP';
export const AUTH_FAILURE_LOGIN = 'AUTH_FAILURE_LOGIN';

export const DATA_FETCH_START = 'DATA_FETCH_START';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

export const DETAILS_FETCH_START = 'DETAILS_FETCH_START';
export const DETAILS_FETCH_SUCCESS = 'DETAILS_FETCH_SUCCESS';
export const DETAILS_FETCH_FAILURE = 'DETAILS_FETCH_FAILURE';

export const PROFILE_FETCH_START = 'PROFILE_FETCH_START';
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_FAILURE = 'PROFILE_FETCH_FAILURE';

export const authInit = () => ({
  type: AUTH_INIT,
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authFailureSignup = error => ({
  type: AUTH_FAILURE_SIGNUP,
  payload: error,
});

export const authFailureLogin = error => ({
  type: AUTH_FAILURE_LOGIN,
  payload: error,
});

export const dataFetchStart = () => ({
  type: DATA_FETCH_START,
});

export const dataFetchSuccess = data => ({
  type: DATA_FETCH_SUCCESS,
  payload: data,
});

export const dataFetchFailure = () => ({
  type: DATA_FETCH_FAILURE,
});

export const detailsFetchStart = () => ({
  type: DETAILS_FETCH_START,
});

export const detailsFetchSuccess = data => ({
  type: DETAILS_FETCH_SUCCESS,
  payload: data,
});

export const detailsFetchFailure = () => ({
  type: DETAILS_FETCH_FAILURE,
});

export const profileFetchStart = () => ({
  type: PROFILE_FETCH_START,
});

export const profileFetchSuccess = data => ({
  type: PROFILE_FETCH_SUCCESS,
  payload: data,
});

export const profileFetchFailure = () => ({
  type: PROFILE_FETCH_FAILURE,
});
