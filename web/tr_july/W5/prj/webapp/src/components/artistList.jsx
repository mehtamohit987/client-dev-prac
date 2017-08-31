import React from 'react';
import Artist from './artist';
import PropTypes from 'prop-types';

class ArtistList extends React.PureComponent {

    componentDidMount() {
        if (this.props.match && this.props.match.params.query) {
            this.props.search(this.props.match.params.query);
        }
        if (this.props.needsFetching) {
            this.props.loadArtistList();
        }
    }

    componentDidUpdate() {
        if (this.props.match && this.props.match.params.query) {
            if (this.props.match.params.query !== this.props.inputText) {
                this.props.search(this.props.match.params.query);
            }
        } else if (this.props.inputText) {
            this.props.revertSearch();
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div>
                            <h1>Artists</h1>
                            <div className="row">
                                {
                                    (this.props.artists.length) ?
                                        this.props.artists.map((artist, index) => <Artist artist={artist} key={index} index={index}/>) :
                                        <p> {this.props.needsFetching ? 'Loading...' : 'No records.'} </p>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ArtistList.propTypes = {
    match: PropTypes.object,
    inputText: PropTypes.string,
    artists: PropTypes.array,
    needsFetching: PropTypes.bool,
    search: PropTypes.func.isRequired,
    loadArtistList: PropTypes.func.isRequired,
    revertSearch: PropTypes.func.isRequired,
};

export default ArtistList;
