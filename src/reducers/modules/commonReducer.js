import { getToken } from "../../utils/token";
import {
  COMMON_FETCH_PENDING,
  COMMON_FETCH_FAILED,
  COMMON_FETCH_SUCCEEDED,
  SET_LOADING,
  SET_TOKEN,
  SET_AUTH,
  LOGOUT
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
  [COMMON_FETCH_SUCCEEDED]: (state, { payload }) => ({
    ...state,
    isAuth: true,
    error: false,
    loading: false,
    token: payload
  }),
  // [SET_LOADING]: (state, { payload = true }) => ({
  //   ...state,
  //   loading: payload
  // }),
  // [SET_TOKEN]: (state, { payload }) => ({
  //   ...state,
  //   token: payload,
  //   isAuth: true,
  //   loading: false
  // }),
  // [SET_AUTH]: state => ({ ...state, isAuth: true }),
  // [LOGOUT]: state => ({ ...state, isAuth: false, token: null, loading: false }),
  DEFAULT: state => state
};

const commonReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default commonReducer;
