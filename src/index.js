import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App';

ReactDOM.render(
  // 通过 Provider 组件将 store 放在全局的组件可以取到的地方
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
