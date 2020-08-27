"use strict";

var dt = new Date();
var options = {
  timeZone: "Indian/Christmas",
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
var nowDate = dt.toLocaleString('en-IN', options);
document.querySelector('#date').innerHTML = nowDate;