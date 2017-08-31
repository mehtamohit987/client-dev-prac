/* global describe it expect beforeAll jest */
import * as httpSagas from '../sagas/httpSagas';
import * as actionTypes from '../constants/actionTypes';
import { call, race } from 'redux-saga/effects';
import * as artistsAPI from '../api/artists';
import * as commonUtil from '../utils/common';

describe('saga', () => {
    beforeAll(() => {
        commonUtil.timeout = jest.fn().mockReturnValue(new Promise(() => {}));
    });

    describe('test loadArtistList', () => {
        let loadArtistList;

        beforeAll(() => {
            loadArtistList = httpSagas.loadArtistList();

            artistsAPI.fetchArtists = jest.fn();
        });

        it('should have called the api', () => {
            expect(JSON.stringify(loadArtistList.next().value)).toEqual(JSON.stringify(race({
                data: call(() => artistsAPI.fetchArtists()),
                timeOut: commonUtil.timeout(7000),
            })));
        });
    });

    describe('test loadArtistDetail', () => {
        let loadArtistDetail;
        const action = {
            type: actionTypes.LOAD_ARTIST_DETAIL,
            id: 1,
        };

        beforeAll(() => {
            loadArtistDetail = httpSagas.loadArtistDetail(action);

            artistsAPI.fetchArtist = jest.fn();
        });

        it('should have called the api', () => {
            expect(JSON.stringify(loadArtistDetail.next().value)).toEqual(JSON.stringify(race({
                data: call(() => artistsAPI.fetchArtist(action.id)),
                timeOut: commonUtil.timeout(7000),
            })));
        });
    });

    describe('test editArtistDetail', () => {
        let editArtistDetail;
        const action = {
            id: '1',
            editedData: {
                description: 'Full Description Here.',
            },
        };

        beforeAll(() => {
            editArtistDetail = httpSagas.editArtistDetail(action);

            artistsAPI.editArtist = jest.fn();
        });

        it('should have called the api', () => {
            expect(JSON.stringify(editArtistDetail.next().value)).toEqual(JSON.stringify(race({
                data: call(() => artistsAPI.editArtist(action.id, action.editedData)),
                timeOut: commonUtil.timeout(7000),
            })));
        });
    });
});