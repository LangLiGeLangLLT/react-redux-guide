import { applyMiddleware, createStore } from 'redux';
import RootReducer from './reducers/root.reducer'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'

// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  RootReducer,
  applyMiddleware(
    // thunk,
    sagaMiddleware
  )
)

// 启动 counterSaga
sagaMiddleware.run(rootSaga)
