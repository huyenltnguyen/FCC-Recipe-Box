import React from 'react';
import ReactDOM from 'react-dom';
import { loadState, saveState } from './localStorage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState({
    recipes: store.getState().recipes
  });
});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
