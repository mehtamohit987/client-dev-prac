import {delay} from "redux-saga";
import {call,put,takeLatest} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import {removeTask}  from "../actions/actionCreators";

export function* removeTaskAsync({id}){
    yield call(delay, 500)
    yield put(removeTask(id));
}

export default function* watchRemoveTaskAsync () {
    yield takeLatest(actionTypes.REMOVE_TASK_ASYNC, removeTaskAsync);
}