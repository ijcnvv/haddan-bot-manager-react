import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_FETCH_DATA, USER_EDIT_PROPS } from "constants/index";
import {
  fetchUserPending,
  fetchUserFailed,
  fetchUserSucceeded
} from "actions/userActions";
import {
  ajaxGetUserById,
  ajaxEditUserProperty,
  ajaxAddPlayer
} from "api/index";
import { USER_ADD_PLAYER } from "../../constants";

function* fetchUser({ payload }) {
  try {
    yield put(fetchUserPending());
    const user = yield call(ajaxGetUserById, payload);
    yield put(fetchUserSucceeded(user));
  } catch ({ message }) {
    yield put(fetchUserFailed(message));
  }
}

function* editUserProps({ payload, callback }) {
  try {
    yield put(fetchUserPending());
    const user = yield call(ajaxEditUserProperty, payload);
    yield call(callback);
    yield put(fetchUserSucceeded(user));
  } catch ({ message }) {
    yield put(fetchUserFailed(message));
  }
}

function* addPlayer({ payload, callback }) {
  try {
    yield put(fetchUserPending());
    const user = yield call(ajaxAddPlayer, payload);
    yield call(callback);
    yield put(fetchUserSucceeded(user));
  } catch ({ message }) {
    yield put(fetchUserFailed(message));
  }
}

function* watchFetchingUserById() {
  yield takeLatest(USER_FETCH_DATA, fetchUser);
}

function* watchEditUserProps() {
  yield takeLatest(USER_EDIT_PROPS, editUserProps);
}

function* watchAddPlayer() {
  yield takeLatest(USER_ADD_PLAYER, addPlayer);
}

export default function* userSagas() {
  yield all([watchFetchingUserById(), watchEditUserProps(), watchAddPlayer()]);
}
