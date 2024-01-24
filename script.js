const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".number");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const previousDisplay = document.querySelector (".prev-display")
const currentDisplay = document.querySelector (".current")
const operands = document.querySelectorAll(".operation")
let operation;


function appendNumber(number){
    if(number == "." && current.innerText.includes(".")) return;
    current.innerText += number;
}

numbers.forEach((number) =>{
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    })
})

function chooseOperation(operand) {
if (currentDisplay.innerHTMl == "") return;
compute (operand);
operation=operand;
currDisplay.innerText += operand;
previousDisplay.innerText = currDisplay.innerText;
currDisplay.innerText = "";
}


del.addEventListener("click", () => {
    current.innerText = current.innerText.slice(0, -1);
})

clear.addEventListener("click", () => {
    current.innerText = "";
})


function compute(operand) {
let result;
const previousValue = parseFloat(previous.innerHTML);
const currentValue = parseFloat(currentDisplay.innerHTML);

if (isNaN(previousValue) || isNaN(currentValue))  return;
switch (operation) {
case "+":
    result = previousValue + currentValue;
    break;


}






}