import {delay} from "redux-saga";
import {call,put,takeLatest} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import {checkItem}  from "../actions/actionCreators";

export function* checkItemAsync({id}){
    yield call(delay, 500)
    yield put(checkItem(id));
}

export default function* watchCheckItemAsync () {
    yield takeLatest(actionTypes.CHECK_ITEM_ASYNC, checkItemAsync);
}