import React from 'react';

var heading = {
  color: 'blue',
  fontSize: '50px',
};

function Heading() {
  return (
    <h1 className="heading" style={heading}>
      My Dashboard
    </h1>
  );
}

export default Heading;
