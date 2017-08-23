import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  render () {
    return (

      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <HashRouter>
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
          </div>
        </HashRouter>
        <Player />
      </div>
    );
  }
}

/*
this.state.selectedAlbum.id ?
<SingleAlbum album={this.state.selectedAlbum} /> :
<AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
*/
