import React from "react"
import ReactDOM from "react-dom"
import {default as App} from "./container/AppRedux.js"

import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware, createStore} from "redux";
import {default as myreducers} from "./reducers/statereducers.js";
import {logger, crashReporter} from "./middleware/middleware";

const reducers = combineReducers({
    state: myreducers
});
const store = createStore(reducers,
applyMiddleware(logger, crashReporter));

ReactDOM.render(
<div>
    <Provider store={store}>
    <App />
    </Provider>
</div>
, document.getElementById('container'));
