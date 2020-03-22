import {
  USERS_FETCH_DATA_PENDING,
  USERS_FETCH_DATA_FAILED,
  USERS_FETCH_DATA_SUCCSEEDED,
  USERS_ADD_USER_SUCCEEDED
} from "../../constants";

const initialState = {
  loading: false,
  error: false,
  profit: {},
  users: []
};

const handlers = {
  [USERS_FETCH_DATA_PENDING]: state => ({
    ...state,
    loading: true,
    error: false
  }),
  [USERS_FETCH_DATA_FAILED]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),
  [USERS_FETCH_DATA_SUCCSEEDED]: (state, { payload }) => ({
    ...state,
    loading: false,
    users: payload.users,
    profit: payload.profit
  }),
  [USERS_ADD_USER_SUCCEEDED]: state => ({
    ...state,
    loading: false
  }),
  DEFAULT: state => state
};

const usersReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default usersReducer;
