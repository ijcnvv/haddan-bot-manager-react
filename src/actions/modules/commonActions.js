import {
  COMMON_FETCH_AUTH_BY_PASSWORD,
  COMMON_FETCH_PENDING,
  COMMON_FETCH_SUCCEEDED,
  COMMON_FETCH_FAILED,
  COMMON_FETCH_AUTH_BY_TOKEN,
  COMMON_FETCH_LOGOUT
} from "../../constants";

export const fetchAuthByEmailAndPassword = ({ email, password }) => ({
  type: COMMON_FETCH_AUTH_BY_PASSWORD,
  payload: { email, password }
});

export const fetchAuthByToken = token => ({
  type: COMMON_FETCH_AUTH_BY_TOKEN,
  payload: token
});

export const fetchLogout = () => ({ type: COMMON_FETCH_LOGOUT });

export const commonFetchPending = () => ({ type: COMMON_FETCH_PENDING });

export const commonFetchSucceeded = token => ({
  type: COMMON_FETCH_SUCCEEDED,
  payload: token
});

export const commonFetchFailed = () => ({ type: COMMON_FETCH_FAILED });
