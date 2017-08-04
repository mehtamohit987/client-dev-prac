import {delay} from "redux-saga";
import {call,put,takeLatest} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import {toggleTaskStatus}  from "../actions/actionCreators";

export function* toggleTaskStatusAsync({id}){
    yield call(delay, 500)
    yield put(toggleTaskStatus(id));
}

export default function* watchToggleTaskStatusAsync () {
    yield takeLatest(actionTypes.TOGGLE_TASK_STATUS_ASYNC, toggleTaskStatusAsync);
}