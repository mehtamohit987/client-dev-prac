import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({ tempText, tempTextChangeCallback }) => (
    <div className="top-buffer">
        <div className="input-group col-sm-6 col-md-8">
            <input type="text" className="search-query form-control" placeholder="Search" value={tempText}
                onChange={(e) => tempTextChangeCallback(e.target.value)}
            />
            <div className="input-group-btn">
                <Link className="btn btn-default" type="button" to={`/search/${tempText}`}><i className="glyphicon glyphicon-search"></i></Link>
            </div>
        </div>
    </div>
);

Search.propTypes = {
    tempText: PropTypes.string,
    tempTextChangeCallback: PropTypes.func,
};

export default Search;
