export const SIGNUP_INIT = 'SIGNUP_INIT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_INIT = 'LOGIN_INIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const DATA_FETCH_START = 'DATA_FETCH_START';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

export const DETAILS_FETCH_START = 'DETAILS_FETCH_START';
export const DETAILS_FETCH_SUCCESS = 'DETAILS_FETCH_SUCCESS';
export const DETAILS_FETCH_FAILURE = 'DETAILS_FETCH_FAILURE';

export const PROFILE_FETCH_START = 'PROFILE_FETCH_START';
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_FAILURE = 'PROFILE_FETCH_FAILURE';

export const signupInit = () => ({
  type: SIGNUP_INIT,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const loginInit = () => ({
  type: LOGIN_INIT,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
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
