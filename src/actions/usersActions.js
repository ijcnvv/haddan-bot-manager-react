import {
  USERS_FETCH_DATA,
  USERS_FETCH_DATA_PENDING,
  USERS_FETCH_DATA_FAILED,
  USERS_FETCH_DATA_SUCCSEEDED,
  USERS_ADD_USER,
  USERS_ADD_USER_SUCCEEDED
} from "../constants";

export const fetchUsers = () => ({ type: USERS_FETCH_DATA });
export const fetchUsersPending = () => ({ type: USERS_FETCH_DATA_PENDING });
export const fetchUsersFailed = payload => ({
  type: USERS_FETCH_DATA_FAILED,
  payload
});

export const fetchUsersSucceeded = (users = []) => ({
  type: USERS_FETCH_DATA_SUCCSEEDED,
  payload: users
});

export const fetchAddUser = (payload, callback) => ({
  type: USERS_ADD_USER,
  payload,
  callback
});

export const fetchAddUserSucceeded = () => ({
  type: USERS_ADD_USER_SUCCEEDED
});
