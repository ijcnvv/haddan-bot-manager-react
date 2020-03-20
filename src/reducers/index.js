import { combineReducers } from "redux";
import updates from "./modules/updatesReducer";

const rootReducer = combineReducers({
  updates
});

export default rootReducer;
