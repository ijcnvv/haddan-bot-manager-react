import {
  USER_FETCH_DATA_PENDING,
  USER_FETCH_DATA_FAILED,
  USER_FETCH_DATA_SUCCSEEDED,
  USER_ON_PATH_LEAVE
} from "../../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: false,
  user: {}
};

const handlers = {
  [USER_FETCH_DATA_PENDING]: state => ({
    ...state,
    loading: true,
    loaded: false,
    error: false
  }),
  [USER_FETCH_DATA_FAILED]: state => ({
    ...state,
    loading: false,
    error: true
  }),
  [USER_FETCH_DATA_SUCCSEEDED]: (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: payload
  }),
  [USER_ON_PATH_LEAVE]: () => initialState,
  DEFAULT: state => state
};

const userReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default userReducer;
