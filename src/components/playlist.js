import React from 'react';
import {truncate} from 'lodash';

const Playlist = props => {
  const currentPlaylist = props.currentPlaylist;
  const currentSong = props.currentSong;
  return (
    <div className="playlistContainer">
      {currentPlaylist.map(function(playlist, index) {
        return (
          <div key={index} className={`track ${index === currentSong ? 'currentSong' : ''}`}>
            <div className="artist">{playlist['Artist']}</div>
            <div className="title">
              {truncate(playlist['Title'], {
                length: 50,
                separator: ' '
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
