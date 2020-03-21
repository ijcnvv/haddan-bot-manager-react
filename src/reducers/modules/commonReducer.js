import { getToken } from "../../utils/token";
import {
  COMMON_FETCH_PENDING,
  COMMON_FETCH_FAILED,
  COMMON_FETCH_AUTH_SUCCEEDED,
  COMMON_FETCH_LOGOUT_SUCCEEDED
} from "../../constants";

const initialState = {
  error: false,
  loading: false,
  isAuth: false,
  token: getToken()
};

const handlers = {
  [COMMON_FETCH_PENDING]: state => ({ ...state, error: false, loading: true }),
  [COMMON_FETCH_FAILED]: state => ({
    ...state,
    isAuth: false,
    error: true,
    loading: false
  }),
  [COMMON_FETCH_AUTH_SUCCEEDED]: (state, { payload }) => ({
    ...state,
    isAuth: true,
    error: false,
    loading: false,
    token: payload
  }),
  [COMMON_FETCH_LOGOUT_SUCCEEDED]: state => ({
    ...state,
    isAuth: false,
    error: false,
    loading: false,
    token: null
  }),
  DEFAULT: state => state
};

const commonReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default commonReducer;
