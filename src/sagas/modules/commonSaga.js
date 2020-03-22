import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  COMMON_FETCH_AUTH_BY_PASSWORD,
  COMMON_FETCH_AUTH_BY_TOKEN,
  COMMON_FETCH_LOGOUT
} from "constants/index";
import {
  commonFetchFailed,
  commonFetchPending,
  fetchAuthSucceeded,
  fetchLogoutSucceeded
} from "actions/commonActions";
import {
  ajaxAuthByEmailAndPassword,
  ajaxAuthByToken,
  ajaxLogout
} from "api/index";
import { saveToken, clearToken } from "utils/token";

function* authByEP({ payload }) {
  try {
    yield put(commonFetchPending());
    const { token } = yield call(ajaxAuthByEmailAndPassword, payload);
    yield call(saveToken, token);
    yield put(fetchAuthSucceeded(token));
  } catch ({ message }) {
    yield put(commonFetchFailed(message));
  }
}

function* authByToken({ payload }) {
  try {
    yield put(commonFetchPending());
    yield call(ajaxAuthByToken, payload);
    yield put(fetchAuthSucceeded(payload));
  } catch ({ message }) {
    yield put(commonFetchFailed(message));
  }
}

function* logout() {
  try {
    yield put(commonFetchPending());
    yield call(ajaxLogout);
    yield call(clearToken);
    yield put(fetchLogoutSucceeded());
  } catch ({ message }) {
    yield put(commonFetchFailed(message));
  }
}

function* watchFetchingAuthByEmailAndPassword() {
  yield takeLatest(COMMON_FETCH_AUTH_BY_PASSWORD, authByEP);
}

function* watchFetchingAuthByToken() {
  yield takeLatest(COMMON_FETCH_AUTH_BY_TOKEN, authByToken);
}

function* watchFetchingLogout() {
  yield takeLatest(COMMON_FETCH_LOGOUT, logout);
}

export default function* commonSagas() {
  yield all([
    watchFetchingAuthByEmailAndPassword(),
    watchFetchingAuthByToken(),
    watchFetchingLogout()
  ]);
}
