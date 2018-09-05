import React from 'react';

const coverImage = props => {
	console.log(props.currentRadio)
	return (
		<img className="coverImage" src={`/images/${props.currentRadio}.png`} />);
};

export default coverImage;
