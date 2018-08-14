import React, { Component } from 'react';
import '../App.css';
// import { radio1, radio2, radio3, radio6 } from '../playlists/*.json';
import radio1 from '../playlists/radio1.json';
import radio2 from '../playlists/radio2.json';
import radio3 from '../playlists/radio3.json';
import radio6 from '../playlists/radio6.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      current: {
        song: '',
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
    console.log('playlist', this.state.playlists);
    return (
      <div className="App">
        <div>Introducing playlist</div>
        add playlist component here
      </div>
    );
  }
}

export default App;
