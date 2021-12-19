import { MAZE_FETCH_PENDING, MAZE_FETCH_SUCCEEDED, MAZE_FETCH_FAILED } from '../../constants';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const handlers = {
  [MAZE_FETCH_PENDING]: (state) => ({ ...state, error: false, loading: true }),
  [MAZE_FETCH_FAILED]: (state) => ({ ...state, loading: false, error: true }),
  [MAZE_FETCH_SUCCEEDED]: (state, { payload }) => ({ ...state, loading: false, data: payload }),
  DEFAULT: (state) => state,
};

const mazeReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default mazeReducer;
