import {
  UPDATES_FETCH_DATA,
  UPDATES_FETCH_PENDING,
  UPDATES_FETCH_SUCCEEDED,
  UPDATES_FETCH_FAILED
} from "../constants";

export const fetchUpdates = () => ({ type: UPDATES_FETCH_DATA });
export const fetchUpdatesPending = () => ({ type: UPDATES_FETCH_PENDING });
export const fetchUpdatesFailed = payload => ({
  type: UPDATES_FETCH_FAILED,
  payload
});
export const fetchUpdatesSucceeded = (updates = []) => ({
  type: UPDATES_FETCH_SUCCEEDED,
  payload: updates
});
