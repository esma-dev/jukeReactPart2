import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import NotFound from './NotFound';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';

export default class Main extends Component {

  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (

    <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
          <div className="col-xs-10">
            <Switch>
              <Route
              path='/'
              exact
              component={StatefulAlbums} />
              <Route
              path='/albums'
              exact
              component={StatefulAlbums} />
              <Route path='/albums/:albumId' component={SingleAlbum} />
              <Route path='/artists/' exact component={AllArtists} />
              <Route path='/artists/:artistId' component={SingleArtist} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        <Player />
      </div>
    </HashRouter>
    );
  }
}
