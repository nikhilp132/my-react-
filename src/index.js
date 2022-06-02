import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var heading = {
  color: 'blue',
  fontSize: '50px',
};

ReactDOM.render(
  <>
    <h1 className="heading" style={heading}>
      My Dashboard
    </h1>
    <div className="listContainer">
      <p className="listCreater">+ Create a List</p>
    </div>
  </>,
  document.getElementById('root')
);
