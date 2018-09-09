import React from 'react';
import logos from '../images/logos.js';

const RadioButton = props => {
  return (
    <button className={`selectRadio ${props.selectedPlaylist ? 'selectedRadio' : ''}`} id={props.buttonName} onClick={props.onClick}>
      {logos.selectRadio}
      {props.buttonName}
    </button>
  );
};

export default RadioButton;