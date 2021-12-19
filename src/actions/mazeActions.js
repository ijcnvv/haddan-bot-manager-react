import { MAZE_FETCH_DATA, MAZE_FETCH_PENDING, MAZE_FETCH_SUCCEEDED, MAZE_FETCH_FAILED } from '../constants';

export const fetchMaze = (payload = {}) => ({ type: MAZE_FETCH_DATA, payload });

export const fetchMazePending = () => ({ type: MAZE_FETCH_PENDING });

export const fetchMazeFailed = (payload = {}) => ({ type: MAZE_FETCH_FAILED, payload });

export const fetchMazeSucceeded = (maze = '') => ({ type: MAZE_FETCH_SUCCEEDED, payload: maze });
