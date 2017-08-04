import React from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../constants/ActionTypes";

export function* helloSaga() {
    console.log("From Saga");
}

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: actionTypes.INCREMENT_COUNTER })
}

export function* watchIncrementAsync() {
    yield takeEvery(actionTypes.INCREMENT_COUNTER_ASYNC, incrementAsync)
}

export function* APIResponse() {
   var data = yield call(delay, 9000);
    yield {
        data: {}, error: {}, success: false
    }
}

export function* APIActions() {
//     let it = APIResponse();
//    var res = yield it.next();
//    console.log(res)
//     // debugger;
//     let { value } = it.next();
//     console.log(value);
   var value = yield* APIResponse();
    // debugger;    
    yield put({ type: (value && value.data && value.success) ? actionTypes.API_SUCCESS : actionTypes.API_FAILURE });
}

export function* watchAPIActionsAsync() {
    yield takeEvery(actionTypes.LOAD_API_RESULTS, APIActions)
}

export default function* rootSaga() {
    yield all([helloSaga(), watchIncrementAsync(), watchAPIActionsAsync()])
}