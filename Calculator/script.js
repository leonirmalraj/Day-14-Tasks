let displayValue = "";

function handleButtonClick(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}
