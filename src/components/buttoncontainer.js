import React from 'react';
import Button from './button.js';

function ButtonContainer(props) {
  return (
    <div>
      <Button
        onClick={() => props.onClick(0)}
        buttonName={'Radio 1'}/>
      <Button
        onClick={() => props.onClick(1)}
        buttonName={'Radio 2'}/>
      <Button
        onClick={() => props.onClick(2)}
        buttonName={'Radio 3'}/>
      <Button
        onClick={() => props.onClick(3)}
        buttonName={'Radio 6'}/>
    </div>
  );
}

export default ButtonContainer
