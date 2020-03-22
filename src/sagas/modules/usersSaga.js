import { takeLatest, all, put, call } from "redux-saga/effects";
import {
  fetchUsersPending,
  fetchUsersFailed,
  fetchUsersSucceeded,
  fetchAddUserSucceeded
} from "../../actions/usersActions";
import { USERS_FETCH_DATA, USERS_ADD_USER } from "../../constants";
import { ajaxGetUsers, ajaxCreateUser } from "../../api";

function* fetchUsers() {
  try {
    yield put(fetchUsersPending());
    const users = yield call(ajaxGetUsers);
    yield put(fetchUsersSucceeded(users));
  } catch ({ message }) {
    yield put(fetchUsersFailed(message));
  }
}

function* addUser({ payload, callback }) {
  try {
    yield put(fetchUsersPending());
    const { id } = yield call(ajaxCreateUser, payload);
    yield put(fetchAddUserSucceeded());
    yield call(callback, id);
  } catch ({ message }) {
    yield put(fetchUsersFailed(message));
  }
}

function* watchFetchingUsers() {
  yield takeLatest(USERS_FETCH_DATA, fetchUsers);
}

function* watchAddingUser() {
  yield takeLatest(USERS_ADD_USER, addUser);
}

export default function* usersSagas() {
  yield all([watchFetchingUsers(), watchAddingUser()]);
}
