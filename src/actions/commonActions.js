import {
  COMMON_FETCH_AUTH_BY_PASSWORD,
  COMMON_FETCH_PENDING,
  COMMON_FETCH_AUTH_SUCCEEDED,
  COMMON_FETCH_FAILED,
  COMMON_FETCH_AUTH_BY_TOKEN,
  COMMON_FETCH_LOGOUT,
  COMMON_FETCH_LOGOUT_SUCCEEDED
} from "../constants";

export const fetchAuthByEmailAndPassword = ({ email, password }) => ({
  type: COMMON_FETCH_AUTH_BY_PASSWORD,
  payload: { email, password }
});

export const fetchAuthByToken = token => ({
  type: COMMON_FETCH_AUTH_BY_TOKEN,
  payload: token
});

export const fetchLogout = () => ({ type: COMMON_FETCH_LOGOUT });

export const fetchLogoutSucceeded = () => ({
  type: COMMON_FETCH_LOGOUT_SUCCEEDED
});

export const commonFetchPending = () => ({ type: COMMON_FETCH_PENDING });

export const fetchAuthSucceeded = token => ({
  type: COMMON_FETCH_AUTH_SUCCEEDED,
  payload: token
});

export const commonFetchFailed = payload => ({
  type: COMMON_FETCH_FAILED,
  payload
});
