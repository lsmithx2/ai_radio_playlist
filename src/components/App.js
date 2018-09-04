import React, { Component } from 'react';
import '../App.css';
import Playlist from './playlist.js';
import Button from './button.js';
import ButtonContainer from './buttoncontainer.js';
import Player from './player.js';

import radio1 from '../playlists/radio1.json';
import radio2 from '../playlists/radio2.json';
import radio3 from '../playlists/radio3.json';
import radio6 from '../playlists/radio6.json';

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
  }

  componentWillMount() {
    const radios = [radio1, radio2, radio3, radio6];
    this.setState({ playlists: radios });
  }

  handleClick() {
    const nextSong = this.state.current.song === this.state.playlists[this.state.current.playlist].length-1 ? 0 : this.state.current.song + 1;
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
        <div>Introducing playlist</div>
        <Playlist
          currentPlaylist={this.state.playlists[this.state.current.playlist]}
          currentSong={this.state.current.song}
        />
        <Button onClick={() => this.handleClick()} buttonName={'Next song'} />
        <ButtonContainer onClick={playlistNumber => this.changePlaylist(playlistNumber)} />
        <Player
          currentSong={this.state.playlists[this.state.current.playlist][this.state.current.song]}
          nextSong={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default App;
