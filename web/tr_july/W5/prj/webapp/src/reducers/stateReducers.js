import * as actionTypes from '../constants/actionTypes';
import { loadedArtistDetail } from '../actions/actionCreators';
import { combineReducers } from 'redux';

const initialStateArtist = {};
const initialStateArtistList = [];
const initialStateInputText = '';
const initialStateListNeedsFetching = true;
const initialStateArtistID = null;
const initialStateModalIsOpen = false;

const artistReducer = (state = initialStateArtist, action) => {
    if ((!action) || (Object(action) !== action) || (!('type' in action))) {
        return state;
    }
    switch (action.type) {
        case actionTypes.LOADED_ARTIST_DETAIL: return action.artistData;

        case actionTypes.EDITED_ARTIST_DETAIL: if (action.artistData && action.artistData.artist_id &&
            state.artist_id === action.artistData.artist_id) {
            return action.artistData;
        } return state;

        case actionTypes.FAILED_LOADING_ARTIST_DETAIL: console.log('Error: ' + action.error); return initialStateArtist;

        default: return state;
    }
};

const artistListReducer = (state = initialStateArtistList, action) => {
    if ((!action) || (Object(action) !== action) || (!('type' in action))) {
        return state;
    }
    switch (action.type) {
        case actionTypes.LOADED_ARTIST_LIST: return action.artists.map((artist) => artistReducer(undefined, loadedArtistDetail(artist)));

        default: return state;
    }
};

const inputTextReducer = (state = initialStateInputText, action) => {
    if ((!action) || (Object(action) !== action) || (!('type' in action))) {
        return state;
    }
    switch (action.type) {
        case actionTypes.SET_INPUT_TEXT: return action.inputText;

        case actionTypes.CLEAR_INPUT_TEXT: return initialStateInputText;

        default: return state;
    }
};

const listNeedsFetchingReducer = (state = initialStateListNeedsFetching, action) => {
    if ((!action) || (Object(action) !== action) || (!('type' in action))) {
        return state;
    }
    switch (action.type) {
        case actionTypes.LOADED_ARTIST_LIST: return false;

        case actionTypes.FAILED_LOADING_ARTIST_LIST: console.log('Error: ' + action.error); return false;

        default: return state;
    }
};

const artistIDReducer = (state = initialStateArtistID, action) => {
    if ((!action) || (Object(action) !== action) || (!('type' in action))) {
        return state;
    }
    switch (action.type) {
        case actionTypes.SET_ID: return action.id;

        default: return state;
    }
};

const modalIsOpenReducer = (state = initialStateModalIsOpen, action) => {
    if ((!action) || (Object(action) !== action) || (!('type' in action))) {
        return state;
    }
    switch (action.type) {
        case actionTypes.SET_ID: return initialStateModalIsOpen;

        case actionTypes.OPEN_MODAL: return true;

        case actionTypes.CLOSE_MODAL: return initialStateModalIsOpen;

        case actionTypes.EDITED_ARTIST_DETAIL: return initialStateModalIsOpen;

        case actionTypes.FAILED_EDITING_ARTIST_DETAIL: alert('Error: ' + action.error); return initialStateModalIsOpen;

        default: return state;
    }
};

const artiststReducer = combineReducers({
    artistList: artistListReducer,
    inputText: inputTextReducer,
    listNeedsFetching: listNeedsFetchingReducer,
});

const artistDetailReducer = combineReducers({
    id: artistIDReducer,
    artist: artistReducer,
    modalIsOpen: modalIsOpenReducer,
});

const stateReducers = combineReducers({
    artists: artiststReducer,
    artistDetail: artistDetailReducer,
});

export default stateReducers;
