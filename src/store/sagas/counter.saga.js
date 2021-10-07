import { takeEvery, put, delay } from 'redux-saga/effects'
import { increment, incrementAsync } from '../actions/counter.action';
/*import { INCREMENT_ASYNC } from '../const/counter.const';*/
// takeEvery 接收 action
// put 触发 action

function* incrementAsyncFn(action) {
  yield delay(2000)
  yield put(increment(action.payload))
}

/*
export default function* counterSaga() {
  // 接收 action
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncFn)
}
*/

export default function* counterSaga() {
  // 接收 action
  yield takeEvery(incrementAsync, incrementAsyncFn)
}
