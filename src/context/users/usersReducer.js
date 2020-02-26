import { SET_USERS_DATA, SET_LOADING } from "../../constants";

const handlers = {
  [SET_USERS_DATA]: (state, { payload }) => ({
    ...state,
    users: payload.users,
    profit: payload.profit,
    loading: false
  }),
  [SET_LOADING]: (state, { payload = true }) => ({
    ...state,
    loading: payload
  }),
  DEFAULT: state => state
};

const usersReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default usersReducer;
