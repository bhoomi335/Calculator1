let currentInput = "";
let operationCount = 0;

function appendToDisplay(value) {
    if (operationCount < 10) {
        currentInput += value;
        document.getElementById("display").value = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();  
        operationCount++;
    } catch (e) {
        document.getElementById("display").value = "Error";
        currentInput = "";
    }
}
