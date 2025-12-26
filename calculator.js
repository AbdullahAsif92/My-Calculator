const input = document.querySelector('input');
const numberButtons = document.querySelectorAll('.basic-button');
const opreationsButtons = document.querySelectorAll('.opreation-row-button');
const equalButton = document.querySelector('.perfom-button');
const clearButton = document.querySelector('.clear-button');
const darkModeButton = document.querySelector('.dark-mode-button');
const lightModeBUtton = document.querySelector('.light-mode-button');
const body = document.querySelector('body');

let currentValue = "";
let previousValue = "";
let operator = null;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        if(value === '.' && currentValue.includes('.')) return;

        currentValue += value;     
        input.value += value;      
    });
});

opreationsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const op = button.textContent.trim();

        operator = op;
        previousValue = currentValue;  
        currentValue = "";             

        input.value += ` ${op} `;      
    });
});

equalButton.addEventListener("click", () => {
    let result;
    switch(operator){
        case '+': result = Number(previousValue) + Number(currentValue); break;
        case '-': result = Number(previousValue) - Number(currentValue); break;
        case 'x': result = Number(previousValue) * Number(currentValue); break;
        case '÷': result = Number(previousValue) / Number(currentValue); break;
        default: result = currentValue; break;
    }

    input.value += ` = ${result}`;   
    currentValue = result;        
    previousValue = "";
    operator = null;
});

clearButton.addEventListener("click", () => {
    currentValue = "";
    previousValue = "";
    operator = null;
    input.value = "";
});

darkModeButton.addEventListener("click", () => {
    body.classList.add('dark-mode');
});

lightModeBUtton.addEventListener("click", () => {
    body.classList.remove('dark-mode');
});