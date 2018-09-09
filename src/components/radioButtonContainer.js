import React from 'react';
import RadioButton from './radioButton.js';
import config from './config.js';

function RadioButtonContainer(props) {
  return (
    <div className="radioButtonContainer">
      {config.radios.map(function(radio, index) {
        return (
          <RadioButton
            key={index}
            onClick={() => props.onClick(index)}
            buttonName={radio}
            selectedPlaylist={index === props.currentPlaylist ? true : false}
          />
        );
      })}
    </div>
  );
}

export default RadioButtonContainer;
