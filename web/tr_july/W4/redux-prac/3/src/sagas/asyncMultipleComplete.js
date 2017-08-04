import {delay} from "redux-saga";
import {call,put,takeLatest} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import {completeMultipleTask}  from "../actions/actionCreators";

export function* completeMultipleTaskAsync({id}){
    yield call(delay, 500)
    yield put(completeMultipleTask(id));
}

export default function* watchCompleteMultipleTaskAsync () {
    yield takeLatest(actionTypes.COMPLETE_MULTIPLE_TASK_ASYNC, completeMultipleTaskAsync);
}