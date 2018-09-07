import React from 'react';

const Playlist = props => {
  const currentPlaylist = props.currentPlaylist;
  const currentSong = props.currentSong;
  return (
    <div className="playlistContainer">
      {currentPlaylist.map(function(playlist, index) {
        return (
          <div key={index} className={`track ${index === currentSong ? 'currentSong' : ''}`}>
            <div className="artist">{playlist['Artist']}</div>
            <div className="title">{playlist['Title']}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
