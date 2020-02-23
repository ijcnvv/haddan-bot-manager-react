import { SET_UPDATES, SET_LOADING } from "../../constants";

const handlers = {
  [SET_UPDATES]: (state, { payload }) => ({
    ...state,
    updates: payload,
    loading: false
  }),
  [SET_LOADING]: state => ({ ...state, loading: true }),
  DEFAULT: state => state
};

export const commonReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
