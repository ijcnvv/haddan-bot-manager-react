import { getToken } from "../../utils/token";
import { SET_LOADING, SET_TOKEN, SET_AUTH, LOGOUT } from "../../constants";

const initialState = {
  loading: false,
  isAuth: false,
  token: getToken()
};

const handlers = {
  [SET_LOADING]: (state, { payload = true }) => ({
    ...state,
    loading: payload
  }),
  [SET_TOKEN]: (state, { payload }) => ({
    ...state,
    token: payload,
    isAuth: true,
    loading: false
  }),
  [SET_AUTH]: state => ({ ...state, isAuth: true }),
  [LOGOUT]: state => ({ ...state, isAuth: false, token: null, loading: false }),
  DEFAULT: state => state
};

const commonReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default commonReducer;
