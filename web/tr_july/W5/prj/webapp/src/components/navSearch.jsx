import React from 'react';
import Search from './search';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavSearch extends React.Component {
  state = { tempText: '' };

  componentWillReceiveProps(nextProps) {
      if (!nextProps.inputText) {
          this.setState({ tempText: '' });
          return;
      }
      this.setState({ tempText: nextProps.inputText });
  }

  tempTextChangeCallback = (tempText) => {
      this.setState({ tempText });
  }

  render() {
      return (
          <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                  <div className="navbar-header">
                      <Link className="navbar-brand" to="/">Marvelous Artists</Link>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                      <ul className="nav navbar-nav navbar-right">
                      </ul>
                      <Search tempText={this.state.tempText} tempTextChangeCallback={this.tempTextChangeCallback}/>
                  </div>
              </div>
          </nav>
      );
  }
}

NavSearch.propTypes = {
    inputText: PropTypes.string,
};

export default NavSearch;
