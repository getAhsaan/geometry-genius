


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

document.getElementById('triangle-btn').addEventListener('click', function () {
    const base = getInputValue('triangle-base');
    const width = getInputValue('triangle-height');
    const name = getInputName('triangle-name');

    if (base === 0 || width === 0) {
        return;
    }
    serial += 1;
    // calculate 
    const triangleArea = areaCalculator(base, width);


    // display result in website
    const resultContainer = document.getElementById('result-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}. ${name}</td>
    <td><span id="result">${triangleArea}</span>cm<sup>2</sup></td>
     <td>
     <button 
     id="convert-cm-m" 
     class="py-1 px-2 bg-blue-500 text-white rounded-md">
     Convert to m<sup>2</sup>
    </button>
    </td>
    <td><a id="remove" href="#">X</a></td>
    `;
    resultContainer.appendChild(tr);

    // set empty input value 
    setInputValue('triangle-base', "");
    setInputValue('triangle-height', "");

})

// rectangle area calculator 
