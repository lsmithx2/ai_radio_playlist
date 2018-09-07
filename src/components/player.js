import React from 'react';
import ControllerButton from './controllerButton.js';

const Player = props => {
  const audio_src = '/BBC_Introducing_Music/Kent/' + props.currentSong['Track_id'] + '.mp3';
  return (
    <div className="audioPlayer">
      <ControllerButton nextSong={props.nextSong} buttonName={'PreviousSong'} />
      <audio onEnded={props.nextSong} controls="controls" src={audio_src} type="audio/mpeg" />
      <ControllerButton nextSong={props.nextSong} buttonName={'NextSong'} />
    </div>
  );
};

export default Player;
