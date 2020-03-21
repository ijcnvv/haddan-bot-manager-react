import {
  USER_FETCH_DATA,
  USER_FETCH_DATA_PENDING,
  USER_FETCH_DATA_FAILED,
  USER_FETCH_DATA_SUCCSEEDED,
  USER_ON_PATH_LEAVE
} from "../../constants";

export const fetchUserById = id => ({ type: USER_FETCH_DATA, payload: id });
export const fetchUserPending = () => ({ type: USER_FETCH_DATA_PENDING });
export const fetchUserFailed = () => ({ type: USER_FETCH_DATA_FAILED });
export const fetchUserSucceeded = (user = {}) => ({
  type: USER_FETCH_DATA_SUCCSEEDED,
  payload: user
});

export const onPathLeave = () => ({ type: USER_ON_PATH_LEAVE });
