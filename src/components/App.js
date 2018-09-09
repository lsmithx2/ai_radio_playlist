import React, { Component } from 'react';
import '../App.css';
import config from './config.js';
import Playlist from './playlist.js';
import RadioButtonContainer from './radioButtonContainer.js';
import Player from './player.js';
import CoverImage from './coverImage.js';
import radio1 from '../playlists/radio1.json';
import radio2 from '../playlists/radio2.json';
import radio3 from '../playlists/radio3.json';
import radio6 from '../playlists/radio6.json';
import logos from '../images/logos.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      current: {
        song: 0,
        playlist: 0
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const radios = [radio1, radio2, radio3, radio6];
    this.setState({ playlists: radios });
  }

  handleClick(nextOrPrevious) {
    let nextSong;
    if (nextOrPrevious === 'NextSong') {
      nextSong =
        this.state.current.song === this.state.playlists[this.state.current.playlist].length - 1
          ? 0
          : this.state.current.song + 1;
    } else {
      nextSong = this.state.current.song === 0 ? 0 : this.state.current.song - 1;
    }
    this.setState({
      current: {
        ...this.state.current,
        song: nextSong
      }
    });
  }

  changePlaylist(playlistNumber) {
    this.setState({
      current: {
        playlist: playlistNumber,
        song: 0
      }
    });
  }

  render() {
    return (
      <div className="App">
        {logos.bbcConnected}
        <div className="playerContainer">
          <div className="radioControllers">
            <div className="cover">
              <CoverImage currentRadio={config.radios[this.state.current.playlist]} />
            </div>
            <RadioButtonContainer onClick={playlistNumber => this.changePlaylist(playlistNumber)} currentPlaylist={this.state.current.playlist}/>
          </div>
          <div className="playlistPlayerContainer">
            <Playlist
              currentPlaylist={this.state.playlists[this.state.current.playlist]}
              currentSong={this.state.current.song}
            />
            <Player
              currentSong={this.state.playlists[this.state.current.playlist][this.state.current.song]}
              nextSong={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
