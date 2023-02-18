

// all card selection
const cards = document.querySelectorAll('.card');
// random color function
cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.style.backgroundColor = randomColor();
    })
})
