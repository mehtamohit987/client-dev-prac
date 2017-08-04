import React from "react"
import ReactDOM from "react-dom"
import {default as App} from "./container/AppRedux.js"

import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware, createStore} from "redux";
import {default as myreducers} from "./reducers/statereducers.js";
import {logger, crashReporter} from "./middleware/middleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/saga.js";

const reducers = combineReducers({
    state: myreducers
});

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers,
applyMiddleware(logger, crashReporter, sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
ReactDOM.render(
<div>
    <Provider store={store}>
    <App />
    </Provider>
</div>
, document.getElementById('container'));
