import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './ducks'
import './index.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

