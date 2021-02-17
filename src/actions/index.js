export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const signupInit = () => ({
  type: AUTH_INIT,
});

export const signupSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const signupFailure = error => ({
  type: AUTH_FAILURE,
  payload: error,
});

export const loginInit = () => ({
  type: AUTH_INIT,
});

export const loginSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const loginFailure = error => ({
  type: AUTH_FAILURE,
  payload: error,
});

export const dataFetchStart = () => ({
  type: FETCH_START,
});

export const dataFetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const dataFetchFailure = () => ({
  type: FETCH_FAILURE,
});

export const detailsFetchStart = () => ({
  type: FETCH_START,
});

export const detailsFetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const detailsFetchFailure = () => ({
  type: FETCH_FAILURE,
});
