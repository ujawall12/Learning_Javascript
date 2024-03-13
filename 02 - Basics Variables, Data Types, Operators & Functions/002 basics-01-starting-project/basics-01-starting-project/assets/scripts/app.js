const defaultResult = 0;
let  currentResult = defaultResult; 
const calculationType = userInput.value;

if(calculationType === 'add') {
    add();
} else if(calculationType === 'subtract') {
    substract();
} else if(calculationType === 'multiply') {
    multiply();
} else if(calculationType === 'divide') {
    divide();
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if(calculationType !== 'add' && calculationType !== 'subtract' && calculationType !== 'multiply' && calculationType !== 'divide' || !enteredNumber) {
        return;
    }
}

function getUserInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult+= enteredNumber;
    outputResult(currentResult, calcDescription);
}
 
function substract() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult-= enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult*= enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult/= enteredNumber;
    outputResult(currentResult, calcDescription);
}  

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

const obj = {
    addition: add()
}