import { put, call, takeLatest } from "redux-saga/effects";
import { UPDATES_FETCH_DATA } from "constants/index";
import { ajaxGetUpdates } from "api/index";
import {
  fetchUpdatesPending,
  fetchUpdatesFailed,
  fetchUpdatesSucceeded
} from "actions/updatesActions";

function* getUpdates() {
  try {
    yield put(fetchUpdatesPending());
    const data = yield call(ajaxGetUpdates);
    yield put(fetchUpdatesSucceeded(data));
  } catch ({ message }) {
    yield put(fetchUpdatesFailed(message));
  }
}

export default function* watchUpdatesFetching() {
  yield takeLatest(UPDATES_FETCH_DATA, getUpdates);
}
