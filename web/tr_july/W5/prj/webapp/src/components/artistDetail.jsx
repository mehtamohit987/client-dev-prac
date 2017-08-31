import React from 'react';
import PropTypes from 'prop-types';
import ArtistDetailModal from './artistDetailModal';

class ArtistDetail extends React.PureComponent {
    state = {
        modalData: {},
    };

    componentDidMount() {
        if (this.props.match && this.props.match.params.id && Number.isInteger(parseInt(this.props.match.params.id, 10))) {
            this.id = parseInt(this.props.match.params.id, 10);
            this.props.setId(this.id);
            this.props.loadArtistDetail(this.id, this.state.modalData);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            modalData: {
                name: nextProps.artist.name,
                description: nextProps.artist.description,
                shortDescription: nextProps.artist.shortDescription,
                img: nextProps.artist.img,
            },
        });
    }

    handleEdited = (value, field) => {
        const dict = {};
        dict[field] = value;
        this.setState({ modalData: Object.assign({}, this.state.modalData, dict) });
    }

    handleSubmitedEdited = () => {
        if ((!this.props.artist.artist_id) || isNaN(parseInt(this.props.artist.artist_id, 10))) {
            return;
        }
        this.props.editArtistDetail(this.props.artist.artist_id, this.state.modalData);
    }

    render() {
        return (
            <div className="col-lg-9 col-md-9">
                <div className="table-responsive panel buffer">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-success"> Artist Name</td>
                                <td>{this.props.artist.name}</td>
                            </tr>
                            <tr>
                                <td className="text-success"> Artist ID</td>
                                <td>{this.props.artist.artist_id}</td>
                            </tr>
                            <tr>
                                <td className="text-success"> Description</td>
                                <td>{this.props.artist.description}</td>
                            </tr>
                            <tr>
                                <td className="text-success"> Short Description</td>
                                <td>{this.props.artist.shortDescription}</td>
                            </tr>
                            <tr>
                                <td className="text-success"> Image Path</td>
                                <td>{this.props.artist.img}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        <button type="button" className="btn btn-default left-buffer" role="button" onClick={this.props.openModal}>
                            Edit details »
                        </button>
                    </p>
                    <ArtistDetailModal modalIsOpen={this.props.modalIsOpen} modalData={this.state.modalData} closeModal={this.props.closeModal}
                        onEdit={this.handleEdited} onSubmitEdited={this.handleSubmitedEdited}
                    />
                </div>
            </div>
        );
    }
}

ArtistDetail.propTypes = {
    match: PropTypes.object,
    artist: PropTypes.object,
    modalIsOpen: PropTypes.bool,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired,
    loadArtistDetail: PropTypes.func.isRequired,
    editArtistDetail: PropTypes.func.isRequired,
};

export default ArtistDetail;
