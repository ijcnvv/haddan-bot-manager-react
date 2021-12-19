import { put, call, takeLatest } from 'redux-saga/effects';
import { MAZE_FETCH_DATA } from 'constants/index';
import { ajaxFetchMaze } from 'api/index';
import { fetchMazePending, fetchMazeFailed, fetchMazeSucceeded } from 'actions/mazeActions';

function* getMaze({ payload }) {
  try {
    yield put(fetchMazePending());
    const data = yield call(ajaxFetchMaze, payload);
    yield put(fetchMazeSucceeded(data));
  } catch (e) {
    yield put(fetchMazeFailed(e.message));
  }
}

export default function* watchMazeFetching() {
  yield takeLatest(MAZE_FETCH_DATA, getMaze);
}
