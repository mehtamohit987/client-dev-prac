import {delay} from "redux-saga";
import {call,put,takeLatest} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import {removeMultipleTask}  from "../actions/actionCreators";

export function* removeMultipleTaskAsync({id}){
    yield call(delay, 500)
    yield put(removeMultipleTask(id));
}

export default function* watchRemoveMultipleTaskAsync () {
    yield takeLatest(actionTypes.REMOVE_MULTIPLE_TASK_ASYNC, removeMultipleTaskAsync);
}