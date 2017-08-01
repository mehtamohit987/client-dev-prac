import React from "react";
import ReactDOM from "react-dom";
import {default as App} from "./container/AppRedux";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import {default as myreducers} from "./reducers/statereducer.js";
import {logger,crashReporter} from "./middleware/middleware"
import promise from 'redux-promise';
import thunk from 'redux-thunk'


const reducers = combineReducers({
  state: myreducers
});
 const store = createStore(myreducers,
   applyMiddleware(thunk));////createStoreWithMiddleware(reducers)
//const store = applyMiddleware(promise)(createStore)(myreducers);
ReactDOM.render(
      <div>
                <Provider store={store}>
                  <App />
                </Provider>
            </div>
    , document.getElementById('root'));

