import { createSelector } from 'reselect';

const getArtists = (state) => state.state.artists.artistList;
const getInputText = (state) => state.state.artists.inputText;
const getFilteredArtists = (artists, inputText) => artists.filter((artist) => (artist.name.toLowerCase().indexOf(inputText.toLowerCase()) >= 0 ||
    (parseInt(inputText, 10) === artist.artist_id) || artist.shortDescription.toLowerCase().indexOf(inputText.toLowerCase()) >= 0));

export const getFilteredArtistsSelector = createSelector([getArtists, getInputText], getFilteredArtists);
