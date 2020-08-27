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
var numKey = 0;
var listKey = 0;
var colorList = ['background-color: #DFE7FF;border: 1px solid #DFE7FF;', 'background-color: #fabea7;border: 1px solid #fabea7;', 'background-color: #d1eaa3;border: 1px solid #d1eaa3;', 'background-color: #dbc6eb;border: 1px solid #dbc6eb;', 'background-color: #a4d4ae;border: 1px solid #a4d4ae;', 'background-color: #fee4a6;border: 1px solid #fee4a6;'];
document.querySelector('#submit').addEventListener('click', function () {
  var inputValue = document.querySelector('#listText').value;

  if (inputValue !== null && inputValue !== null && inputValue !== undefined && inputValue !== 0 && inputValue !== "" && inputValue !== false && inputValue !== NaN) {
    var innerDiv = document.createElement('div');
    innerDiv.className = 'container-md themed-container text-muted';
    innerDiv.id = listKey;
    innerDiv.style = colorList[numKey];
    innerDiv.innerHTML = listKey + 1 + '.\t' + inputValue;
    document.querySelector('#listKey').appendChild(innerDiv);
    document.querySelector('#listText').value = '';

    if (numKey < 5) {
      numKey++;
    } else {
      numKey = 0;
    }

    listKey++;
  }
});
document.querySelector('#reset').addEventListener('click', function () {
  document.querySelector('#listKey').innerHTML = '';
  numKey = 0;
});