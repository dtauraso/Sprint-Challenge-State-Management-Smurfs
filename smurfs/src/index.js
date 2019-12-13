import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import smurfReducer from './reducers/smurfReducer';
import * as serviceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    smurfReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

const rootElement = document.getElementById("root")

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
rootElement);

serviceWorker.unregister();
