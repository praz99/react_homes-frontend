export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGOUT = 'LOGOUT';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const signupInit = () => ({
  type: AUTH_INIT,
});

export const signupSuccess = auth_token => ({
  type: AUTH_SUCCESS,
  payload: auth_token,
});

export const signupFailure = () => ({
  type: AUTH_FAILURE,
});

export const loginInit = () => ({
  type: AUTH_INIT,
});

export const loginSuccess = auth_token => ({
  type: AUTH_SUCCESS,
  payload: auth_token,
});

export const loginFailure = () => ({
  type: AUTH_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
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
