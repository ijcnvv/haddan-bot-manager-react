import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_FETCH_DATA } from "../../constants";
import {
  fetchUserPending,
  fetchUserFailed,
  fetchUserSucceeded
} from "../../actions";
import { ajaxGetUserById } from "../../api";

function* fetchUser({ payload }) {
  try {
    yield put(fetchUserPending());
    const user = yield call(ajaxGetUserById, payload);
    yield put(fetchUserSucceeded(user));
  } catch (error) {
    yield put(fetchUserFailed());
  }
}
function* watchFetchingUserById() {
  yield takeLatest(USER_FETCH_DATA, fetchUser);
}

export default function* userSagas() {
  yield all([watchFetchingUserById()]);
}
