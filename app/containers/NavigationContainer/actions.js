/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
} from './constants';

export const requestTopics = () => ({
  type: REQUEST_TOPICS,
});

export const requestTopicsSucceeded = (topics) => ({
  type: REQUEST_TOPICS_SUCCEEDED,
  topics,
});

export const requestTopicsFailed = (message) => ({
  type: REQUEST_TOPICS_FAILED,
  message,
});
