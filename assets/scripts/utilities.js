// random color generator function
function randomColor() {
    let color = [];
    for (let i = 1; i <= 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgba(${color.join(',')},0.6)`;
}