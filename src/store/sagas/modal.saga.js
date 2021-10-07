import { takeEvery, put, delay } from 'redux-saga/effects'
import { show } from '../actions/modal.actions'
import { SHOW_MODAL_ASYNC } from '../const/modal.const';

function* showModalAsyncFn() {
  yield delay(2000)
  yield put(show())
}

export default function* modalSaga() {
  yield takeEvery(SHOW_MODAL_ASYNC, showModalAsyncFn)
}
