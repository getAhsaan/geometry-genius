


// random color generator function
function randomColor() {
    let color = [];
    for (let i = 1; i <= 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgba(${color.join(',')},0.6)`;
}

// GET input value
function getInputValue(id) {
    const value = document.getElementById(id).value;
    if (value === '' || value <= 0 || isNaN(value)) {
        alert('Please enter only positive number');
        return 0;
    }
    return parseInt(value);
}

// get input name 
function getInputName(id) {
    return document.getElementById(id).innerText;
}

// triangle area calculator
function areaCalculator(base, width) {
    return 0.5 * base * width;
}

// set input value
function setInputValue(id, value) {
    const targetInput = document.getElementById(id);
    targetInput.value = value;
}