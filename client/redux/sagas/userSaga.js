import { all, fork, takeLatest, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from '../types';


// loadUser
function loadUserAPI() {
  return axios.get(`/user/auth`);
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result,
    });
  } catch (e) {
    yield put({
      type: LOAD_USER_FAILURE,
      error: e.response,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* companySaga() {
  yield all([
    fork(watchLoadUser),
  ]);
}