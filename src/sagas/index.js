import { all } from "redux-saga/effects";
import updates from "./modules/updatesSaga";
import common from "./modules/commonSaga";
import users from "./modules/usersSaga";

export default function* rootSaga() {
  yield all([updates(), common(), users()]);
}
