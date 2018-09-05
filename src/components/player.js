import React from 'react';

const Player = (props) => {
  const audio_src = "/BBC_Introducing_Music/Kent/"+props.currentSong['Track_id']+ ".mp3";
  return(
    <audio onEnded = {props.nextSong}  controls="controls" id="audioplayer" src= {audio_src} type = "audio/mpeg"></audio>
  )
}

export default Player
