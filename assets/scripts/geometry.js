


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
// rhombus area calculator 

document.getElementById('rhombus-btn').addEventListener('click', function () {
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    const name = getInputName('rhombus-name');

    if (d1 === 0 || d2 === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const rhombusArea = (areaCalculator('rhombus', d1, d2)).toFixed(2);


    // display result in website
    displayInUI(serial, name, rhombusArea)

    // set empty input value 
    setInputValue('rhombus-d1', "");
    setInputValue('rhombus-d2', "");

})
// pentagon area calculator 

document.getElementById('pentagon-btn').addEventListener('click', function () {
    const p = getInputValue('pentagon-p');
    const base = getInputValue('pentagon-base');
    const name = getInputName('pentagon-name');

    if (p === 0 || base === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const pentagonArea = (areaCalculator('pentagon', p, base)).toFixed(2);


    // display result in website
    displayInUI(serial, name, pentagonArea)

    // set empty input value 
    setInputValue('pentagon-p', "");
    setInputValue('pentagon-base', "");

})
// ellipse area calculator 

document.getElementById('ellipse-btn').addEventListener('click', function () {
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    const name = getInputName('ellipse-name');

    if (a === 0 || b === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const ellipseArea = (areaCalculator('ellipse', a, b)).toFixed(2);


    // display result in website
    displayInUI(serial, name, ellipseArea)

    // set empty input value 
    setInputValue('ellipse-a', "");
    setInputValue('ellipse-b', "");

})

document.getElementById('blog-page').addEventListener('click',function(){
    goToMyBlogPage();
})