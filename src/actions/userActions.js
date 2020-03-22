import {
  USER_FETCH_DATA,
  USER_FETCH_DATA_PENDING,
  USER_FETCH_DATA_FAILED,
  USER_FETCH_DATA_SUCCSEEDED,
  USER_ON_PATH_LEAVE,
  USER_EDIT_PROPS,
  USER_ADD_PLAYER
} from "../constants";

export const fetchUserById = id => ({ type: USER_FETCH_DATA, payload: id });

export const fetchUserPending = () => ({ type: USER_FETCH_DATA_PENDING });

export const fetchUserFailed = payload => ({
  type: USER_FETCH_DATA_FAILED,
  payload
});

export const fetchUserSucceeded = (user = {}) => ({
  type: USER_FETCH_DATA_SUCCSEEDED,
  payload: user
});

export const onPathLeave = () => ({ type: USER_ON_PATH_LEAVE });

export const fetchEditingUser = (payload, callback) => ({
  type: USER_EDIT_PROPS,
  payload,
  callback
});

export const fetchAddPlayer = (payload, callback) => ({
  type: USER_ADD_PLAYER,
  payload,
  callback
});
