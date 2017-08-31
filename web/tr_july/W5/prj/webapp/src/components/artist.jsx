import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => (
    <div className="col-lg-4">
        <img className="img-circle" src={artist.img}
            alt="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="140" height="140"
        />
        <h2>{artist.name}</h2>
        <p>{artist.shortDescription}</p>
        <p><Link className="btn btn-default" to={`/detail/${artist.artist_id}`} role="button">View details »</Link></p>
    </div>
);

Artist.propTypes = {
    artist: PropTypes.object,
};

export default Artist;
