import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  USER_FETCH_DATA,
  USER_EDIT_PROPS,
  USER_ADD_PLAYER,
  USER_DELETE_PLAYER,
  USER_RESET_PLAYER,
} from "constants/index";
import {
  fetchUserPending,
  fetchUserFailed,
  fetchUserSucceeded,
} from "actions/userActions";
import {
  ajaxGetUserById,
  ajaxEditUserProperty,
  ajaxAddPlayer,
  ajaxDeletePlayer,
  ajaxResetPlayer,
} from "api/index";

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

function* deletePlayer({ payload }) {
  try {
    yield put(fetchUserPending());
    const user = yield call(ajaxDeletePlayer, payload);
    yield put(fetchUserSucceeded(user));
  } catch ({ message }) {
    yield put(fetchUserFailed(message));
  }
}

function* resetPlayer({ payload }) {
  try {
    yield put(fetchUserPending());
    const user = yield call(ajaxResetPlayer, payload);
    yield put(fetchUserSucceeded(user));
  } catch ({ message }) {
    yield put(fetchUserFailed(message));
  }
}

function* watchFetchingUserById() {
  yield takeLatest(USER_FETCH_DATA, fetchUser);
}

function* watchEditingUserProps() {
  yield takeLatest(USER_EDIT_PROPS, editUserProps);
}

function* watchAddingPlayer() {
  yield takeLatest(USER_ADD_PLAYER, addPlayer);
}

function* watchDeletingPlayer() {
  yield takeLatest(USER_DELETE_PLAYER, deletePlayer);
}

function* watchResetingPlayer() {
  yield takeLatest(USER_RESET_PLAYER, resetPlayer);
}

export default function* userSagas() {
  yield all([
    watchFetchingUserById(),
    watchEditingUserProps(),
    watchAddingPlayer(),
    watchDeletingPlayer(),
    watchResetingPlayer(),
  ]);
}
