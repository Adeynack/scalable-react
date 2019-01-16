import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

async function fetchLinksFromServer(topic) {
  const response = await fetch(`http://localhost:3000/api/topics/${topic.name}/links`);
  return await response.json();
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

export default [
  defaultSaga,
];
