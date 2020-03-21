import {
  USERS_FETCH_DATA,
  USERS_FETCH_DATA_PENDING,
  USERS_FETCH_DATA_FAILED,
  USERS_FETCH_DATA_SUCCSEEDED
} from "../../constants";

export const fetchUsers = () => ({ type: USERS_FETCH_DATA });
export const fetchUsersPending = () => ({ type: USERS_FETCH_DATA_PENDING });
export const fetchUsersFailed = () => ({ type: USERS_FETCH_DATA_FAILED });
export const fetchUsersSucceeded = (users = []) => ({
  type: USERS_FETCH_DATA_SUCCSEEDED,
  payload: users
});
