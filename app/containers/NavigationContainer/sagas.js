import { call, put } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { takeLatest } from 'redux-saga';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';

async function fetchTopicsFromServer() {
  const response = await fetch('http://localhost:3000/api/topics');
  return await response.json();
}

function* fetchTopics() {
  try {
    // `call` calls an async function and waits for its completion.
    const topics = yield call(fetchTopicsFromServer);
    // `put` dispatches an action to Redux.
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

function* fetchTopicsSaga() {
  // `takeLatest` waits until the REQUEST_TOPICS event is being fired.
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
];
