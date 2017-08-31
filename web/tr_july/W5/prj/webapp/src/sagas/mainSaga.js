import { all } from 'redux-saga/effects';
import httpSagas from './httpSagas';

export default function* mainSaga() {
    yield all([httpSagas()]);
}
