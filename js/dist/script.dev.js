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
document.querySelector('#submit').addEventListener('click', function () {
  var inputValue = document.querySelector('#listText').value;

  if (inputValue !== null && inputValue !== null && inputValue !== undefined && inputValue !== 0 && inputValue !== "" && inputValue !== false && inputValue !== NaN) {
    var innerDiv = document.createElement('div');
    innerDiv.className = 'container-md themed-container text-muted';
    innerDiv.textContent = inputValue;
    document.querySelector('#listKey').appendChild(innerDiv);
    document.querySelector('#listText').value = '';
  }
});
document.querySelector('#reset').addEventListener('click', function () {
  document.querySelector('#listKey').innerHTML = '';
});