import { all, call, put, race, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import { fetchArtists, fetchArtist, editArtist } from '../api/artists';
import { loadedArtistList, failedLoadingArtistList, loadedArtistDetail, failedLoadingArtistDetail, editedArtistDetail, failedEditingArtistDetail }
    from '../actions/actionCreators';
import { timeout } from '../utils/common';
import 'regenerator-runtime/runtime';

export function* loadArtistList() {
    try {
        const { data, timedOut } = yield race({ data: call(fetchArtists), timedOut: call(timeout, 7000) });
        if (data) {
            yield put(loadedArtistList(data));
        } else if (timedOut) {
            yield put(failedLoadingArtistList('Response timed out.'));
        }
    } catch (error) {
        yield put(failedLoadingArtistList('Failed connecting to API Server.'));
    }
}

function* watchLoadArtistList() {
    yield takeLatest(actionTypes.LOAD_ARTIST_LIST, loadArtistList);
}

export function* loadArtistDetail(action) {
    try {
        const { data, timedOut } = yield race({ data: call(fetchArtist, action.id), timedOut: call(timeout, 7000) });
        if (data) {
            yield put(loadedArtistDetail(data));
        } else if (timedOut) {
            yield put(failedLoadingArtistDetail('Response timed out.'));
        }
    } catch (error) {
        yield put(failedLoadingArtistDetail('Failed connecting to API Server.'));
    }
}

function* watchLoadArtistDetail() {
    yield takeLatest(actionTypes.LOAD_ARTIST_DETAIL, loadArtistDetail);
}

export function* editArtistDetail(action) {
    try {
        const { data, timedOut } = yield race({ data: call(editArtist, action.id, action.editedData), timedOut: call(timeout, 7000) });
        if (data) {
            yield put(editedArtistDetail(action.id, data));
        } else if (timedOut) {
            yield put(failedEditingArtistDetail('Response timed out.'));
        }
    } catch (error) {
        yield put(failedEditingArtistDetail('Failed connecting to API Server.'));
    }
}

function* watchEditArtistDetail() {
    yield takeLatest(actionTypes.EDIT_ARTIST_DETAIL, editArtistDetail);
}

export default function* httpSagas() {
    yield all([watchLoadArtistList(), watchLoadArtistDetail(), watchEditArtistDetail()]);
}
