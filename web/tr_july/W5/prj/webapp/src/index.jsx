import React from 'react';
import ReactDOM from 'react-dom';
import ArtistsApp from './artistsApp';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import stateReducers from './reducers/stateReducers';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './sagas/mainSaga';

const reducers = combineReducers({ state: stateReducers });

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
let sagaTask = sagaMiddleware.run(mainSaga);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ArtistsApp/>
        </Provider>
        ,
        document.getElementById('container')
    );
};
store.subscribe(render);
render();

if (module.hot) {
    module.hot.accept('./artistsApp', () => {
        const Comp = require('./artistsApp').default;
        ReactDOM.render(
            <Provider store={store}>
                <Comp/>
            </Provider>,
            document.getElementById('container')
        );
    });

    module.hot.accept('./reducers/stateReducers', () => {
        const retrievedReducer = require('./reducers/stateReducers').default;
        store.replaceReducer(combineReducers({ state: retrievedReducer }));
    });

    module.hot.accept('./sagas/mainSaga', () => {
        const retrievedSaga = require('./sagas/mainSaga').default;
        sagaTask.cancel();
        sagaTask.done.then(() => {
            sagaTask = sagaMiddleware.run(retrievedSaga);
        });
    });
}
