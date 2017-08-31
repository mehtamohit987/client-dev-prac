import React from 'react';
import ArtistListContainer from './containers/artistList';
import ArtistDetailContainer from './containers/artistDetail';
import NavSearchContainer from './containers/navSearch';
import './styles/main.less';

import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

const ArtistsApp = () => (
    <Router history={browserHistory}>
        <main>
            <NavSearchContainer/>
            <Switch>
                <Route path="/search/:query" component={ArtistListContainer}/>
                <Route path="/detail/:id" component={ArtistDetailContainer}/>
                <Route exact path="/" component={ArtistListContainer}/>

            </Switch>
        </main>
    </Router>
);

export default ArtistsApp;
