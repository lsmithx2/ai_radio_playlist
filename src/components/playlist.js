import React from 'react';

const Playlist = props => {
  const currentPlaylist = props.currentPlaylist;
  const currentSong = props.currentSong;
  console.log(currentPlaylist, currentSong);
  return (
    <div className="playlistContainer">
      {currentPlaylist.map(function(playlist, index) {
        console.log(index, currentSong, playlist['Artist']);
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
