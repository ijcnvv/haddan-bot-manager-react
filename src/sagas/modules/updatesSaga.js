import { put, call, takeLatest } from "redux-saga/effects";
import { UPDATES_FETCH_DATA } from "../../constants";
import { ajaxGetUpdates } from "../../api";
import {
  fetchUpdatesPending,
  fetchUpdatesFailed,
  fetchUpdatesSucceeded
} from "../../actions";

function* getUpdates() {
  try {
    yield put(fetchUpdatesPending());
    const data = yield call(ajaxGetUpdates);
    yield put(fetchUpdatesSucceeded(data));
  } catch (error) {
    yield put(fetchUpdatesFailed());
  }
}

export default function* watchUpdatesFetching() {
  yield takeLatest(UPDATES_FETCH_DATA, getUpdates);
}
