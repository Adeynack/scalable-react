import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { REQUEST_LINKS } from './constants';

async function fetchLinksFromServer(topicName) {
  const response = await fetch(`http://localhost:3000/api/topics/${topicName}/links`);
  return await response.json();
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

export default [
  defaultSaga,
];
