import { all } from "redux-saga/effects";
import updates from "./modules/updatesSaga";
import common from "./modules/commonSaga";

export default function* rootSaga() {
  yield all([updates(), common()]);
}
