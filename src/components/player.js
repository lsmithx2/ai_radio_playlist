import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Player = (props) => {
  console.log("track id", props.currentSong['Track_id']);
  const audio_src = "/BBC_Introducing_Music/Kent/"+props.currentSong['Track_id']+ ".mp3";
  console.log(audio_src);
  return(
    <audio onEnded = {props.nextSong}  controls="controls" id="audioplayer" src= {audio_src} type = "audio/mpeg"></audio>
  )
}

export default Player
