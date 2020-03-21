import { combineReducers } from "redux";
import updates from "./modules/updatesReducer";
import common from "./modules/commonReducer";
import users from "./modules/usersReducers";

const rootReducer = combineReducers({
  common,
  updates,
  users
});

export default rootReducer;
