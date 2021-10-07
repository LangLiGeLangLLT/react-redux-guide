/*
import { DECREMENT, INCREMENT } from '../const/counter.const';

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}
*/

import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.action';

const initialState = {
  count: 0
}

function handleIncrement(state, action) {
  return {
    ...state,
    count: state.count + action.payload
  }
}

function handleDecrement(state, action) {
  return {
    ...state,
    count: state.count - action.payload
  }
}

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement
}, initialState)
