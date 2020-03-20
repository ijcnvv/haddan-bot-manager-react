import { combineReducers } from "redux";
import updates from "./modules/updatesReducer";
import common from "./modules/commonReducer";

const rootReducer = combineReducers({
  common,
  updates
});

export default rootReducer;
