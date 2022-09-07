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