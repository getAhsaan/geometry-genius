


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
function areaCalculator(type, base, width) {
    if(type === 'triangle' || type === 'rhombus' || type === 'pentagon'){
        return 0.5 * base * width;  
    }
    if(type === 'ellipse'){
        return Math.PI * base * width;
    }

     return base * width;
}

// set input value
function setInputValue(id, value) {
    const targetInput = document.getElementById(id);
    targetInput.value = value;
}


// display all calculation in the website
function displayInUI(serial,name,area){
    const resultContainer = document.getElementById('result-container');
    const tr = document.createElement('tr');
    tr.className = 'text-xs';
    tr.innerHTML = `
    <td>${serial}. ${name}</td>
    <td><span id="result">${area}</span>cm<sup>2</sup></td>
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
}

// for go to blog page

function goToMyBlogPage(){
    window.location.href = 'blog.html';
}