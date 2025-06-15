function appendValue(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function deleteLast() {
    document.calculator.display.value = document.calculator.display.value.slice(0, -1);
}

function calculateResult() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch {
        document.calculator.display.value = 'Error';
    }
}
