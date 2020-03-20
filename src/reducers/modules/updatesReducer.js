import {
  UPDATES_FETCH_PENDING,
  UPDATES_FETCH_SUCCEEDED,
  UPDATES_FETCH_FAILED
} from "../../constants";

const initialState = {
  loading: false,
  error: false,
  data: []
};

const handlers = {
  [UPDATES_FETCH_PENDING]: state => ({ ...state, error: false, loading: true }),
  [UPDATES_FETCH_FAILED]: state => ({ ...state, loading: false, error: true }),
  [UPDATES_FETCH_SUCCEEDED]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload
  }),
  DEFAULT: state => state
};

const updatesReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default updatesReducer;
