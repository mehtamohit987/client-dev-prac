/* global describe it expect beforeAll jest */
import * as apiUtils from '../utils/api';
import { fetchArtists, fetchArtist, editArtist } from '../api/artists';
import { ARTISTS_URL_RESOURCE } from '../constants/artists';

describe('artists\' api wrapper', () => {

    beforeAll(() => {
        apiUtils.fetchData = jest.fn();

        apiUtils.postData = jest.fn();
    });

    it('fetchArtists should call fetchData', () => {
        fetchArtists();

        expect(apiUtils.fetchData).toHaveBeenCalledWith(ARTISTS_URL_RESOURCE);
    });

    it('fetchArtist should call fetchData', () => {
        const id = 1;
        fetchArtist(id);

        expect(apiUtils.fetchData).toHaveBeenCalledWith(ARTISTS_URL_RESOURCE + '/' + id);
    });

    it('editArtist should call postData', () => {
        const id = 1;
        const payload = { description: 'Detailed description about the item.' };
        editArtist(id, payload);

        expect(apiUtils.postData).toHaveBeenCalledWith(ARTISTS_URL_RESOURCE + '/' + id, payload);
    });
});
