import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Songs from './Songs';


export default class SingleArtist extends Component {
  constructor(props){
    super(props);

    this.state = {
      artist: {},
      albums: [],
      songs: [],
    }
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId;
//use Promise.all
    const artist = axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      // .then(artist => {
      //   this.setState({ artist })
      // });

    const albums = axios.get(`/api/artists/${artistId}/albums`)
    .then(res => res.data)
    // .then(albums => {
    //   this.setState({ albums })
    // });

    const songs = axios.get(`/api/artists/${artistId}/songs`)
    .then(res => res.data)
    // .then(songs => {
    //   this.setState({ songs })
    // });

    Promise.all([artist, albums, songs])
    .then( (artistArr) => {
      this.setState( {
        artist: artistArr[0],
        albums: artistArr[1],
        songs: artistArr[2]
      })
    })
  }

  render () {
    return (
      <div>
        <h3>{this.state.artist.name}</h3>
        <h4>ALBUMS</h4>
        <div className="row">
        {this.state.albums.map( (album) => {
          return (
            <div key={album.id} className="album col-xs-4">
              <div>
                <h3>{ album.name }</h3>
                <img src={ album.imageUrl } className="img-thumbnail" />
              </div>
            </div>
          )
        })}
        </div>
        <h4>SONGS</h4>
          <Songs songs={this.state.songs} />
      </div>
    );
  }
}


