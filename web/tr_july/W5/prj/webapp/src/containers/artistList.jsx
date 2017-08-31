import ArtistList from '../components/artistList';
import { connect } from 'react-redux';
import { loadArtistList, setInputText, clearInputText } from '../actions/actionCreators';
import { getFilteredArtistsSelector } from '../selectors/artists';

const ArtistListContainer = connect(
    (state) => {
        return {
            artists: getFilteredArtistsSelector(state),
            inputText: state.state.artists.inputText,
            needsFetching: state.state.artists.listNeedsFetching,
        };
    },
    (dispatch) => {
        return {
            loadArtistList: () => dispatch(loadArtistList()),
            search: (inputText) => dispatch(setInputText(inputText)),
            revertSearch: () => dispatch(clearInputText()),
        };
    }
)(ArtistList);

export default ArtistListContainer;
