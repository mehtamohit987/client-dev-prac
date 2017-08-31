import ArtistDetail from '../components/artistDetail';
import { connect } from 'react-redux';
import { setId, loadArtistDetail, editArtistDetail, openModal, closeModal } from '../actions/actionCreators';

const ArtistDetailContainer = connect(
    (state) => {
        return {
            artist: state.state.artistDetail.artist,
            modalIsOpen: state.state.artistDetail.modalIsOpen,
        };
    },
    (dispatch) => {
        return {
            setId: (id) => dispatch(setId(id)),
            loadArtistDetail: (id) => dispatch(loadArtistDetail(id)),
            editArtistDetail: (id, editedData) => dispatch(editArtistDetail(id, editedData)),
            openModal: () => dispatch(openModal()),
            closeModal: () => dispatch(closeModal()),
        };
    }
)(ArtistDetail);

export default ArtistDetailContainer;
