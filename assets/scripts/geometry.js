


// all card
const cards = document.querySelectorAll('.card');
// random color function
cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.style.backgroundColor = randomColor();
    })
})

// set serial number
let serial = 0;

// triangle area calculator
document.getElementById('triangle-btn').addEventListener('click', function () {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const name = getInputName('triangle-name');

    if (base === 0 || height === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const triangleArea = (areaCalculator('triangle', base, height)).toFixed(2);


    // display result in website
    displayInUI(serial,name,triangleArea);

    // set empty input value 
    setInputValue('triangle-base', "");
    setInputValue('triangle-height', "");

})

// rectangle area calculator 

document.getElementById('rectangle-btn').addEventListener('click', function () {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const name = getInputName('rectangle-name');

    if (width === 0 || length === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const rectangleArea = (areaCalculator('rectangle', width, length)).toFixed(2);


    // display result in website
    displayInUI(serial, name, rectangleArea)

    // set empty input value 
    setInputValue('rectangle-width', "");
    setInputValue('rectangle-length', "");

})
// parallelogram area calculator 

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const name = getInputName('parallelogram-name');

    if (base === 0 || height === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const parallelogramArea = (areaCalculator('parallelogram', base, height)).toFixed(2);


    // display result in website
    displayInUI(serial, name, parallelogramArea)

    // set empty input value 
    setInputValue('parallelogram-base', "");
    setInputValue('parallelogram-height', "");

})