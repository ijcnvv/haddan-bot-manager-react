import { combineReducers } from 'redux';
import updates from './modules/updatesReducer';
import common from './modules/commonReducer';
import users from './modules/usersReducers';
import user from './modules/userReducers';
import maze from './modules/mazeReducer';

const rootReducer = combineReducers({
  common,
  updates,
  users,
  user,
  maze,
});

export default rootReducer;
