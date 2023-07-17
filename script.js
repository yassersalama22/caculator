const mainScreen = document.getElementById("main-screen");

let mathOperationClicked = false;
let currentOperation = null;
let operand1 = null;
let operand2 = null;

const buttons = document.querySelectorAll(".button");
buttons.forEach((b) => b.addEventListener("click", buttonClickHandler));

function buttonClickHandler() {
    switch (this.innerText) {
        case "/":
            mathOperationClick("division");
            break;
        case "X":
            mathOperationClick("multiply");
            break;
        case "+":
            mathOperationClick("add");
            break;
        case "-":
            mathOperationClick("subtract");
            break;
        case "=":
            equalClick();
            break;
        case "AC":
            clearMainScreen();
            resetCalc();
            break;
        case "DEL":
            eraser();
            break;
        case "+/-":
            togglePlusMinus()
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
    if(mathOperationClicked){
        mainScreen.innerText = 0;
        mathOperationClicked = false;
    }

    if(mainScreen.innerText.length >= 9){
        console.info("You have reached maximum numbers allowed for an operand!");
        return;
    }

    if(text === "." && mainScreen.innerText.indexOf(".") !== -1){
        console.info("Illegal number, multiple decimal points are not allowed!")
        return;
    }
    else if (text === "." && mainScreen.innerText === "0") {
        mainScreen.innerText = "0.";
        return;
    }

    if(mainScreen.innerText !== "0")
    {
        mainScreen.innerText = mainScreen.innerText + text;
    } 
    else {
        mainScreen.innerText = text;
    }
    logger("writeToMainScreen");
}

function togglePlusMinus() {
    let screenText = mainScreen.innerText;
    if(screenText != "0" && screenText.length > 0) {
        mainScreen.innerText = Number(screenText) * -1;
    }
    logger("togglePlusMinus");
}

function clearMainScreen(){
    mainScreen.innerText = "0";
    logger("clearMainScreen");
}

function eraser(){
    const text  = mainScreen.innerText;
    mainScreen.innerText = text.slice(0,-1);
    logger("eraser");
}

function mathOperationClick(operation){
    mathOperationClicked = true;
    currentOperation = operation;

    if(operand1 === null && operand2 === null){
        operand1 = Number(mainScreen.innerText);
    }
    else if (operand1 !== null && operand2 === null){
        operand2 = Number(mainScreen.innerText);
        doMathOperation();
    }
    logger("mathOperationClick");
}

function equalClick()
{
    const operand = Number(mainScreen.innerText);
    if(operand !== NaN) {
        operand2 = operand;
        if(operand1 !== null){
            doMathOperation();
        }
        else
        {
            operand1 = operand;
            operand2 = null;
        }
        
    }
    logger("equalClick");
}

function doMathOperation()
{
    let result = 0;
    if(operand1 !== null && currentOperation !== null && operand2 !== null)
    {
        switch (currentOperation){
            case "add":
                result = operand1 + operand2;
                break;
            case "subtract":
                result = operand1 - operand2;
                break;
            case "multiply":
                result = operand1 * operand2;
                break;
            case "division":
                result = operand1 / operand2;
                break;
        }

        mainScreen.innerText = result;
        operand1 = null;
        operand2 = null; 
    }
    logger("doMathOperation");
}

function resetCalc(){
    mathOperationClicked = false;
    currentOperation = null;
    operand1 = null;
    operand2 = null;
    logger("resetCalc");
}

function logger(text) {
    console.log(text);
    console.log(`Operand 1 = ${operand1}`);
    console.log(`Operand 2 = ${operand2}`);
    console.log(`Current Operation = ${currentOperation}`);
    console.log(`Math ops Clicked = ${mathOperationClicked}`);
    console.log("-------------------------------------------------------");
}