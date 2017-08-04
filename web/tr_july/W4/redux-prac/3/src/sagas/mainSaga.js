import {all} from "redux-saga/effects";
import watchToggleTaskStatusAsync from './asyncToggle';
import watchRemoveTaskAsync from './asyncRemove';
import watchCheckItemAsync from './asyncCheck'
import watchCompleteMultipleTaskAsync from './asyncMultipleComplete'
import watchRemoveMultipleTaskAsync from './asyncMultipleRemove'
export default function* mainSaga() {
  yield all([ watchToggleTaskStatusAsync(), watchRemoveTaskAsync(), watchCheckItemAsync(), watchCompleteMultipleTaskAsync(), watchRemoveMultipleTaskAsync() ])
}