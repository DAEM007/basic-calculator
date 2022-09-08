// REFERENCE TO ALL THE BUTTONS FOR DOM MANIPULATION
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const btnEquals = document.querySelector('.btn-equals');
const btnClear = document.querySelector('.btn-clear');
const powerTwo = document.querySelector('.btn-power-2');
const powerThree = document.querySelector('.btn-power-3');

// DOM MANIPULATION

// for each button...note that the btns variable represents an array
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

// for the power-2 button...we would want to get the square of a number
powerTwo.addEventListener('click', () => {
    let int = parseInt(screen.value);
    screen.value = Math.pow(int, 2);
})

// for the power-3 button...we would want to get the cube of a number
powerThree.addEventListener('click', () => {
    let int = parseInt(screen.value);
    screen.value = Math.pow(int, 3);
})

// for the equals button...we would want to do an evaluation of the figures here
btnEquals.addEventListener('click', () => {
    let value = eval(screen.value);
    // console.log(screen.value = `${value}`);
    if(screen.value === ''){
        alert('Invalid input')
    }
    else{
        screen.value = value;
    }
})

// for the clear button....we would want to clear the screen.value
btnClear.addEventListener('click', () => {
    screen.value = '';
})