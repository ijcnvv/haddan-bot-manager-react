import { combineReducers } from "redux";
import updates from "./modules/updatesReducer";
import common from "./modules/commonReducer";
import users from "./modules/usersReducers";
import user from "./modules/userReducers";

const rootReducer = combineReducers({
  common,
  updates,
  users,
  user
});

export default rootReducer;
