# Redux-Saga Notes

## Links

- [API Documentation](https://redux-saga.js.org/docs/api/)

## Effects

### [call](https://redux-saga.js.org/docs/api/#callfn-args)

```js
const topics = yield call(fetchTopicsFromServer, 'a', 42);
```

- Calls generator or async function `fetchTopicsFromServer` with parameters `'a'` and `42`.
- Wait for `fetchTopicsFromServer` to yield its next value or waits for its promise to complete.
- Puts the result in `topics`

### [put](https://redux-saga.js.org/docs/api/#putaction)

```js
yield put(requestTopicsSucceeded(topics));
```

Dispatches the action object returned from calling `requestTopicsSucceeded(topics)`.

## Helpers

### [takeLatest](https://redux-saga.js.org/docs/api/#takelatestpattern-saga-args)

```js
yield* takeLatest('REQUEST_TOPICS', fetchTopics);
```

Every time an action of type `REQUEST_TOPICS` is dispatched, function (task) `fetchTopics` is started. It automatically cancels any previous task started bu it, if it's still running.
