/* global describe it expect */
import * as actions from '../actions/actionCreators';
import * as actionTypes from '../constants/actionTypes';

describe('actions', () => {
    it('should create an action to load artists\' list', () => {
        const expectedAction = {
            type: actionTypes.LOAD_ARTIST_LIST,
        };
        expect(actions.loadArtistList()).toEqual(expectedAction);
    });

    it('should create an action to indicate that artists\' list has loaded', () => {
        const artists = [
            { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
            { 'artist_id': 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
            { 'artist_id': 3, name: 'Al - 3', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
            { 'artist_id': 4, name: 'Al - 4', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
            { 'artist_id': 5, name: 'Al - 5', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' },
        ];
        const expectedAction = {
            type: actionTypes.LOADED_ARTIST_LIST,
            artists,
        };
        expect(actions.loadedArtistList(artists)).toEqual(expectedAction);
    });

    it('should create an action to indicate that artists\' list has failed loading', () => {
        const error = 'Failed connecting to API Server.';
        const expectedAction = {
            type: actionTypes.FAILED_LOADING_ARTIST_LIST,
            error,
        };
        expect(actions.failedLoadingArtistList(error)).toEqual(expectedAction);
    });

    it('should create an action to load artist\'s detail', () => {
        const id = 1;
        const expectedAction = {
            type: actionTypes.LOAD_ARTIST_DETAIL,
            id,
        };
        expect(actions.loadArtistDetail(id)).toEqual(expectedAction);
    });

    it('should create an action to indicate that artist\'s detail has loaded', () => {
        const artistData = { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg' };
        const expectedAction = {
            type: actionTypes.LOADED_ARTIST_DETAIL,
            artistData,
        };
        expect(actions.loadedArtistDetail(artistData)).toEqual(expectedAction);
    });

    it('should create an action to indicate that artist\'s detail has failed loading', () => {
        const error = 'Failed connecting to API Server.';
        const expectedAction = {
            type: actionTypes.FAILED_LOADING_ARTIST_DETAIL,
            error,
        };
        expect(actions.failedLoadingArtistDetail(error)).toEqual(expectedAction);
    });

    it('should create an action to edit artist\'s detail', () => {
        const id = 1;
        const editedData = { shortDescription: 'Short desc' };
        const expectedAction = {
            type: actionTypes.EDIT_ARTIST_DETAIL,
            id,
            editedData,
        };
        expect(actions.editArtistDetail(id, editedData)).toEqual(expectedAction);
    });

    it('should create an action to indicate that artist\'s detail has been edited', () => {
        const id = 1;
        const artistData = { 'artist_id': 1, name: 'Al - 1', shortDescription: 'Short desc', description: 'Long d', img: '/images/1.jpg' };
        const expectedAction = {
            type: actionTypes.EDITED_ARTIST_DETAIL,
            id,
            artistData,
        };
        expect(actions.editedArtistDetail(id, artistData)).toEqual(expectedAction);
    });

    it('should create an action to indicate that artist\'s detail has failed editing', () => {
        const error = 'Failed connecting to API Server.';
        const expectedAction = {
            type: actionTypes.FAILED_EDITING_ARTIST_DETAIL,
            error,
        };
        expect(actions.failedEditingArtistDetail(error)).toEqual(expectedAction);
    });

    it('should create an action to set input text', () => {
        const inputText = 'input';
        const expectedAction = {
            type: actionTypes.SET_INPUT_TEXT,
            inputText,
        };
        expect(actions.setInputText(inputText)).toEqual(expectedAction);
    });

    it('should create an action to clear input text', () => {
        const expectedAction = {
            type: actionTypes.CLEAR_INPUT_TEXT,
        };
        expect(actions.clearInputText()).toEqual(expectedAction);
    });

    it('should create an action to set artist id', () => {
        const id = 1;
        const expectedAction = {
            type: actionTypes.SET_ID,
            id,
        };
        expect(actions.setId(id)).toEqual(expectedAction);
    });

    it('should create an action to open artist detail edit modal', () => {
        const expectedAction = {
            type: actionTypes.OPEN_MODAL,
        };
        expect(actions.openModal()).toEqual(expectedAction);
    });

    it('should create an action to close artist detail edit modal', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_MODAL,
        };
        expect(actions.closeModal()).toEqual(expectedAction);
    });
});
