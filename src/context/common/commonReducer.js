import {
  SET_UPDATES,
  SET_LOADING,
  SET_TOKEN,
  SET_AUTH,
  LOGOUT
} from "../../constants";

const handlers = {
  [SET_LOADING]: (state, { payload = true }) => ({
    ...state,
    loading: payload
  }),
  [SET_UPDATES]: (state, { payload }) => ({
    ...state,
    updates: payload,
    loading: false
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

export const commonReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
