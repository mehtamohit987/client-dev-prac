import { ARTISTS_URL_RESOURCE } from '../constants/artists';
import { fetchData, postData } from '../utils/api';

export const fetchArtists = () => fetchData(ARTISTS_URL_RESOURCE);

export const fetchArtist = (artistId) => fetchData(ARTISTS_URL_RESOURCE + '/' + artistId);

export const editArtist = (artistId, editedData) => postData(ARTISTS_URL_RESOURCE + '/' + artistId, editedData);
