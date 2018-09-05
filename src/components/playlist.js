import React from 'react';

const Playlist = props => {
  const currentPlaylist = props.currentPlaylist;
  const currentSong = props.currentSong;
  return (
    <div className="playlistContainer">
      {currentPlaylist.map(function(playlist, index) {
        return (
          <div key={index} className={index === currentSong ? 'currentSong' : ''}>
            {playlist['Artist']} {playlist['Title']}
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
