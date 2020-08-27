var dt = new Date();
var options = {
    timeZone: "Indian/Christmas",
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
var nowDate = dt.toLocaleString('en-IN', options);
document.querySelector('#date').innerHTML = nowDate;
var numKey = 0;
var colorList = ['background-color: #DFE7FF;border: 1px solid #DFE7FF;', 'background-color: #fabea7;border: 1px solid #fabea7;', 'background-color: #DFE7FF;border: 1px solid #DFE7FF;', 'background-color: #DFE7FF;border: 1px solid #DFE7FF;', 'background-color: #DFE7FF;border: 1px solid #DFE7FF;', 'background-color: #DFE7FF;border: 1px solid #DFE7FF;'];
document.querySelector('#submit').addEventListener('click', function() {
    var inputValue = document.querySelector('#listText').value;
    if (inputValue !== null && inputValue !== null && inputValue !== undefined && inputValue !== 0 && inputValue !== "" && inputValue !== false && inputValue !== NaN) {
        var innerDiv = document.createElement('div');
        innerDiv.className = 'container-md themed-container text-muted';
        innerDiv.textContent = inputValue;
        innerDiv.style = colorList[numKey];
        document.querySelector('#listKey').appendChild(innerDiv);
        document.querySelector('#listText').value = '';
        if (numKey < 6) {
            numKey++;
        } else {
            numKey = 0;
        }
    }
})

document.querySelector('#reset').addEventListener('click', function() {
    document.querySelector('#listKey').innerHTML = '';
    numKey = 0;
})