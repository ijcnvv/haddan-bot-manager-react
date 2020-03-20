import { takeLatest, put, call, all } from "redux-saga/effects";
import { COMMON_FETCH_AUTH_BY_PASSWORD } from "../../constants";
import {
  commonFetchFailed,
  commonFetchPending,
  commonFetchSucceeded
} from "../../actions";
import { ajaxAuthByEmailAndPassword } from "../../api";
import { saveToken } from "../../utils/token";

function* authByEP({ payload }) {
  try {
    yield put(commonFetchPending());
    const { token } = yield call(ajaxAuthByEmailAndPassword, payload);
    yield call(saveToken, token);
    yield put(commonFetchSucceeded(token));
  } catch (error) {
    console.log(error);
    yield put(commonFetchFailed());
  }
}

function* watchFetchingAuthByEmailAndPassword() {
  yield takeLatest(COMMON_FETCH_AUTH_BY_PASSWORD, authByEP);
}

export default function* commonSagas() {
  yield all([watchFetchingAuthByEmailAndPassword()]);
}
