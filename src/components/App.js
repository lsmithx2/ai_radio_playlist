import React, { Component } from 'react';
import '../App.css';
import Playlist from './playlist.js';
// import { radio1, radio2, radio3, radio6 } from '../playlists/*.json';
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
    const radios = [radio1, radio2, radio3, radio6]
    let playlists = [];
    radios.forEach(function(item, key) {
      playlists.push(item);
    });
    this.setState({playlists : playlists});
  }

  render() {
    console.log('playlist', this.state.playlists[0]);
    console.log(this.state.current.playlist)

    return (
      <div className="App">
        <div>Introducing playlist</div>
        <Playlist
          currentPlaylist={this.state.playlists[this.state.current.playlist]}
          currentSong={this.state.current.song}
        />
      </div>
    );
  }
}

export default App;
