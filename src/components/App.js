import React, { Component } from 'react';
import '../App.css';
import playlist1 from '../playlists/radio1.json';
// import '../playlists/radio2.json';
// import '../playlists/radio3.json';
// import '../playlists/radio6.json';
import {cloneDeep} from 'lodash';

class App extends Component {
  constructor(){
    super();
    this.state = {
      current:{
        song: "",
        playlist:0
      }
    }
  }
  componentWillMount() {
    const loadData = () => cloneDeep(playlist1)
    console.log('loadData', loadData);
  }
    render() {
    console.log("playlist", this.state.current.playlist)
    return (
      <div className="App">
        <div>Introducing playlist</div>
      </div>
    );
  }
}

export default App;
