import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
}

function reducer(state = initialState, action) {

  if (action.type === "Increment") {
    state.count = state.count + action.payload;
    console.log(state.count);
  } else if (action.type === "Decrement") {
    if (state.count == 0) {
      state.count = 0;
    } else {
      state.count = state.count - action.payload;
    }
  } else {
    state.count = initialState.count;
  }
  return { ...state }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
