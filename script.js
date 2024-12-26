const button = document.querySelector('button');
const circle = document.querySelector('.circle');
let flag = 1;
button.addEventListener('click', () => {
    if (flag === 1) {
        circle.style.backgroundColor = 'yellow';
        flag = 0;
        button.textContent = 'Stop';
    } else {
        circle.style.backgroundColor = 'black';
        flag = 1;
        button.textContent = 'Start';
    }
})