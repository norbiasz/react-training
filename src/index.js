import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './assets/main.css'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducer';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
