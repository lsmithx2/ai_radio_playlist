import React from 'react';

const Playlist = (props) => {
    const currentPlaylist = props.currentPlaylist;
    const currentSong = props.currentSong;
    return(
      <div className='playlistContainer'>
        {currentPlaylist.map(function(playlist, index){
          console.log(index,currentSong );
        if(index==currentSong){
          return <div key={ index } className='currentSong'> {playlist['Artist']} {playlist['Title']}</div>;
        }
        return <div key={ index }> {playlist['Artist']} {playlist['Title']}</div>;
      })}
    </div>
  );
}

export default Playlist
