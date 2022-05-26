import React from 'react';
import ReactDOM from 'react-dom';

var d = new Date(),
  year = d.getFullYear(),
  month = d.getMonth() + 1,
  day = d.getDate(),
  hours = d.getHours(),
  minutes = d.getMinutes(),
  seconds = d.getSeconds(),
  a = hours > 12 ? 'PM' : 'AM',
  hours = hours > 12 ? hours - 12 : hours;

ReactDOM.render(
  <>
    <h1 class="heading">My Dashboard</h1>
    <p>todays date is: {`${day}/${month}/${year}`}</p>
    <p>Current Time is: {`${hours}:${minutes}:${seconds} ${a}`}</p>
  </>,
  document.getElementById('root')
);
