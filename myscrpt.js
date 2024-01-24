const current = document.querySelector('.curr-display');
const previous = document.querySelector('.prev-display');
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operations');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
let operation;

function appendNumber(number) {
    if(number == "." && current.innerText.includes(".")) return;
    current.innerText += number;
}

function chooseOperation(operand){
    if(current.innerText == "") return;
    compute(operand)
    operation = operand;    
    current.innerText += operand;
    previous.innerText = current.innerText;
    current.innerText = "";
}

operands.forEach((operand) => {
    operand.addEventListener('click', () => {
        chooseOperation(operand.innerText);
    })
});

numbers.forEach((number) =>{
    number.addEventListener('click', () =>{
        appendNumber(number.innerText);
    })
});

del.addEventListener('click', () => {
    current.innerText = current.innerText.slice(0,-1);
});

clear.addEventListener('click', () => {
    current.innerText = "";
    previous.innerText = "";
});

equal.addEventListener('click', () => {
    compute();
    previous.innerText = "";
});



function compute(operand) {
    let result;
    const previousValue = parseFloat(previous.innerText);
    const currentValue = parseFloat(current.innerText);
    if(isNaN(previousValue) || isNaN(currentValue)) return;

    switch(operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }

    current.innerText = result;
}

