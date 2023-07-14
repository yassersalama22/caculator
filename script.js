const mainScreen = document.getElementById("main-screen");
const secondaryScreen = document.getElementById("secondary-screen");

let decimalDotUsed = false;
let currentOperation = "";
let operand1 = null;
let operand2 = null;

const buttons = document.querySelectorAll(".button");
buttons.forEach((b) => b.addEventListener("click", buttonClickHandler));

function buttonClickHandler() {
    switch (this.innerText) {
        case "/":
            break;
        case "X":
            break;
        case "+":
            break;
        case "-":
            break;
        case "=":
            break;
        case "AC":
            clearMainScreen();
            break;
        case "DEL":
            eraser();
            break;
        case "+/-":
            break;
        case "%":
            break;
        case ".":
            writeToMainScreen(this.innerText);
            decimalDotUsed = true;
            break;
        default:
            writeToMainScreen(this.innerText);
            break;
    }
}

function writeToMainScreen(text){
    if(text === "." && decimalDotUsed){
        return;
    }

    if(mainScreen.innerText !== "0")
    {
        mainScreen.innerText = mainScreen.innerText + text;
    } 
    else {
        mainScreen.innerText = text;
    }
}

function writeToSecondaryScreen(text) {
    
}

function clearSecondaryScreen() {
    secondaryScreen.innerText = "";
}

function clearMainScreen(){
    decimalDotUsed = false;
    mainScreen.innerText = "0";
}

function eraser(){
    const text  = mainScreen.innerText;
    if(text.slice(-1) === "."){
        decimalDotUsed = false;
    }
    mainScreen.innerText = text.slice(0,-1);
}

function addOperation(number1,number2) {
     return number1 + number2;
}

function subtractOperation(number1,number2) {
     return number1 - number2;
}

function multiplyOperation(number1,number2) {
     return number1 * number2;
}

function divisionOperation(number1,number2) {
     return number1 / number2;
}


