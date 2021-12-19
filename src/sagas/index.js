import { all } from 'redux-saga/effects';
import updates from './modules/updatesSaga';
import common from './modules/commonSaga';
import users from './modules/usersSaga';
import user from './modules/userSaga';
import maze from './modules/mazeSaga';

export default function* rootSaga() {
  yield all([updates(), common(), users(), user(), maze()]);
}
