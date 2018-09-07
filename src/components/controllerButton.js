import React from 'react';
import logos from '../images/logos.js';

const ControllerButton = props => {
  console.log(props.buttonName);
  return (
    <button className="controllerButton" id={props.buttonName} onClick={()=>props.nextSong(props.buttonName)}>
      {props.buttonName === "NextSong" ? logos.next : logos.previous}
    </button>
  );
};

export default ControllerButton;
