import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todoAppComponent';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import stateReducers from './reducers/stateReducers';
import createSagaMiddleware from "redux-saga";
import mainSaga from "./sagas/mainSaga.js";

const reducers = combineReducers({state: stateReducers});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);

const render = () => {
    ReactDOM.render (
        <Provider store={store}>
        <TodoApp />
        </Provider>,
        document.getElementById('container')
    )
};
store.subscribe(render);
render();