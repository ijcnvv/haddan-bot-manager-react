import { takeLatest, all, put, call } from "redux-saga/effects";
import {
  fetchUsersPending,
  fetchUsersFailed,
  fetchUsersSucceeded
} from "../../actions";
import { USERS_FETCH_DATA } from "../../constants";
import { ajaxGetUsers } from "../../api";

function* fetchUsers() {
  try {
    yield put(fetchUsersPending());
    const users = yield call(ajaxGetUsers);
    yield put(fetchUsersSucceeded(users));
  } catch (error) {
    yield put(fetchUsersFailed());
  }
}

function* watchFetchingUsers() {
  yield takeLatest(USERS_FETCH_DATA, fetchUsers);
}

export default function* usersSagas() {
  yield all([watchFetchingUsers()]);
}
