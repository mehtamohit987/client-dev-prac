/* global describe it expect */
import reducer from '../reducers/stateReducers';
import * as actionTypes from '../constants/actionTypes';

describe('reducer', () => {
    it('handles EMPTY action well', () => {
        expect(reducer(undefined, {})).toEqual({
            artists: {
                artistList: [],
                inputText: '',
                listNeedsFetching: true,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles LOADING well - no change on async LOAD', () => {
        expect(reducer(undefined, {
            type: actionTypes.LOAD_ARTIST_LIST,
        })).toEqual({
            artists: {
                artistList: [],
                inputText: '',
                listNeedsFetching: true,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles LOADING well - LOADED', () => {
        expect(reducer(undefined, {
            type: actionTypes.LOADED_ARTIST_LIST,
            artists: [
                { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                { 'artist_id': 3, name: 'Al - 3', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                { 'artist_id': 4, name: 'Al - 4', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                { 'artist_id': 5, name: 'Al - 5', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
            ],
        })).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 3, name: 'Al - 3', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 4, name: 'Al - 4', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 5, name: 'Al - 5', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles LOADING well - FAILED', () => {
        expect(reducer(undefined, {
            type: actionTypes.FAILED_LOADING_ARTIST_LIST,
            error: 'Failed connecting to API Server.',
        })).toEqual({
            artists: {
                artistList: [],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles search well - SEARCH', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.SET_INPUT_TEXT,
            inputText: 'inp',
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: 'inp',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles search well - CLEAR', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: 'inp',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.CLEAR_INPUT_TEXT,
            inputText: '',
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles detail well - Setting Id', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: null,
                artist: {},
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.SET_ID,
            id: 1,
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles detail well - no change on async LOAD', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: {},
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.LOAD_ARTIST_DETAIL,
            id: 1,
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles detail well - LOADED', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: {},
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.LOADED_ARTIST_DETAIL,
            artistData: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        });
    });

    it('handles detail well - FAILED', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: {},
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.FAILED_LOADING_ARTIST_DETAIL,
            error: 'Failed connecting to API Server.',
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: {},
                modalIsOpen: false,
            },
        });
    });

    it('handles handles well - open', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.OPEN_MODAL,
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: true,
            },
        });
    });

    it('handles modal well - close', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: true,
            },
        }, {
            type: actionTypes.CLOSE_MODAL,
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        });
    });

    it('handles edit well - no change on async EDIT', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.EDIT_ARTIST_DETAIL,
            id: 1,
            editedData: { description: 'Long desc' },
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        });
    });

    it('handles edit well - EDITED', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        }, {
            type: actionTypes.LOADED_ARTIST_DETAIL,
            artistData: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long desc', img: '/images/1.jpg' },
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long desc', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        });
    });

    it('handles edit well - FAILED', () => {
        expect(reducer({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: true,
            },
        }, {
            type: actionTypes.FAILED_EDITING_ARTIST_DETAIL,
            error: 'Failed connecting to API Server.',
        }
        )).toEqual({
            artists: {
                artistList: [
                    { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                    { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                ],
                inputText: '',
                listNeedsFetching: false,
            },
            artistDetail: {
                id: 1,
                artist: { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
                modalIsOpen: false,
            },
        });
    });
});

