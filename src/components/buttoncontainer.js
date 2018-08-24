import React from 'react';
import Button from './button.js';
import config from './config.js';

function ButtonContainer(props) {
  return (
    <div>
      {config.radios.map(function(radio, index){
        console.log(radio);
        return(
          <Button
            key={index}
            onClick={() => props.onClick(index)}
            buttonName={radio}
          />
        )
      })}
    </div>
  );
}

export default ButtonContainer
