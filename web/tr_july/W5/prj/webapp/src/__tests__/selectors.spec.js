/* global describe it expect */
import { getFilteredArtistsSelector } from '../selectors/artists';

describe('selector', () => {
    const state = {
        state: {
            artists: {
                artistList: [
                    {
                        'artist_id': 1,
                        'name': 'The Script',
                        'shortDescription': 'Famous Irish band',
                        'description': 'The Script are an Irish rock band formed in 2001 in Dublin, Ireland.',
                        'img': '/images/1.jpg',
                    }, {
                        'artist_id': 2,
                        'name': 'Ed Sheeran',
                        'shortDescription': 'English singer-songwriter',
                        'description': 'Edward Christopher Sheeran, MBE (born 17 February 1991) is an English singer-songwriter, ' +
                            'guitarist and record producer.',
                        'img': '/images/2.jpg',
                    }, {
                        'artist_id': 3,
                        'name': 'Luis Fonsi',
                        'shortDescription': 'Puerto Rican-American singer',
                        'description': 'Luis Alfonso Rodríguez López-Cepero (born April 15, 1978), known by his stage name Luis Fonsi, is a ' +
                            'Puerto Rican-American singer, songwriter and actor, best known for the song Despacito.',
                        'img': '/images/3.jpg',
                    }, {
                        'artist_id': 4,
                        'name': 'Eminem',
                        'shortDescription': 'American rapper',
                        'description': 'Marshall Bruce Mathers III (born October 17, 1972), known professionally as ' +
                            'Eminem (often stylized as EMINƎM), is an American rapper, record producer, and actor.',
                        'img': '/images/4.jpg',
                    }, {
                        'artist_id': 5,
                        'name': 'Justin Bieber',
                        'shortDescription': 'Canadian singer and songwriter',
                        'description': 'Justin Drew Bieber (/ˈbiːbər/; born March 1, 1994) is a Canadian singer and songwriter.',
                        'img': '/images/5.jpg',
                    },
                ],
                inputText: 'Ed Sh',
                listNeedsFetching: false,
            },
            artistDetail: {},
        },
    };

    it('Should return filtered result', () => {
        expect(getFilteredArtistsSelector(state)).toEqual([{
            'artist_id': 2,
            'name': 'Ed Sheeran',
            'shortDescription': 'English singer-songwriter',
            'description': 'Edward Christopher Sheeran, MBE (born 17 February 1991) is an English singer-songwriter, guitarist and record producer.',
            'img': '/images/2.jpg',
        }]);
    });
});
