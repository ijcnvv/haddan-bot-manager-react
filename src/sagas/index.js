import { all } from "redux-saga/effects";
import updates from "./modules/updatesSaga";

export default function* rootSaga() {
  yield all([updates()]);
}
