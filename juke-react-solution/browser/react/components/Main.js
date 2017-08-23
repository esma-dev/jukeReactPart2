import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';

export default class Main extends Component {

  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (

    <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
          <div className="col-xs-10">
            <Route
            path='/'
            exact
            component={AllAlbums} />
            <Route
            path='/albums'
            exact
            component={AllAlbums} />
            <Route path='/albums/:albumId' component={SingleAlbum} />
            <Route path='/artists/' exact component={AllArtists} />
            <Route path='/artists/:artistId' component={SingleArtist} />
          </div>
        <Player />
      </div>
    </HashRouter>
    );
  }
}

/*
this.state.selectedAlbum.id ?
<SingleAlbum album={this.state.selectedAlbum} /> :
<AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
*/
