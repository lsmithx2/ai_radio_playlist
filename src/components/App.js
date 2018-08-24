import React, { Component } from 'react';
import '../App.css';
import Playlist from './playlist.js';
import Button from './button.js';
import ButtonContainer from './buttoncontainer.js';
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

  handleClick(){
    const currentSong = this.state.current.song;
    const currentPlaylist = this.state.current.playlist;
    console.log(currentSong);
    this.setState({
      current:{
        playlist: currentPlaylist,
        song : currentSong+1
      }
    });
  }

 changePlaylist(playlistNumber){
   console.log('change to: ',playlistNumber);
   this.setState({
     current:{
       playlist: playlistNumber,
       song : 0
     }
   });
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
       <Button onClick={() => this.handleClick()} buttonName={'Next song'}/>
       <ButtonContainer onClick={(playlistNumber) => this.changePlaylist(playlistNumber)}/>
       // <audio controls = "controls"> <source src =  "../audio/1045653.mp3" type = "audio/mpeg"></source></audio>
       <audio controls="controls" id="audioplayer" src="/1045653.mp3" type = "audio/mpeg"></audio>

      </div>
    );
  }
}

export default App;
