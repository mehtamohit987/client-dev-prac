import * as types from '../constants/actionTypes';

export const loadArtistList = () => {
    return { type: types.LOAD_ARTIST_LIST };
};

export const loadedArtistList = (artists) => {
    return { type: types.LOADED_ARTIST_LIST, artists };
};

export const failedLoadingArtistList = (error) => {
    return { type: types.FAILED_LOADING_ARTIST_LIST, error };
};

export const loadArtistDetail = (id) => {
    return { type: types.LOAD_ARTIST_DETAIL, id };
};

export const loadedArtistDetail = (artistData) => {
    return { type: types.LOADED_ARTIST_DETAIL, artistData };
};

export const failedLoadingArtistDetail = (error) => {
    return { type: types.FAILED_LOADING_ARTIST_DETAIL, error };
};

export const editArtistDetail = (id, editedData) => {
    return { type: types.EDIT_ARTIST_DETAIL, id, editedData };
};

export const editedArtistDetail = (id, artistData) => {
    return { type: types.EDITED_ARTIST_DETAIL, id, artistData };
};

export const failedEditingArtistDetail = (error) => {
    return { type: types.FAILED_EDITING_ARTIST_DETAIL, error };
};

export const setInputText = (inputText) => {
    return { type: types.SET_INPUT_TEXT, inputText };
};

export const clearInputText = () => {
    return { type: types.CLEAR_INPUT_TEXT };
};

export const setId = (id) => {
    return { type: types.SET_ID, id };
};

export const openModal = () => {
    return { type: types.OPEN_MODAL };
};

export const closeModal = () => {
    return { type: types.CLOSE_MODAL };
};
