let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");

const addButton = document.querySelector(".add");
const substractButton = document.querySelector(".substract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");

const errorMessage = document.querySelector(".error-message");

const formResult = document.querySelector(".form-result");

function validateInput(value) {
    if (value.length === 0) {
        errorMessage.innerHTML = "Ambele input-uri trebuie sa contina macar o cifra";
    } else {
        errorMessage.innerHTML = "";
    }
    return errorMessage.innerHTML === "";
}

firstNumber.addEventListener("input", function (event) {
    const firstNumber = event.target.value;
    validateInput(firstNumber);
});

secondNumber.addEventListener("input", function (event) {
    const secondNumber = event.target.value;
    validateInput(secondNumber);
});

function execOperation(operationName, op) {
    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = op(first, second);

    formResult.innerHTML = `Rezulatul operatiei de ${operationName} este: ${result}`;
}

addButton.addEventListener("click", function () {
    execOperation("adunare", (a, b) => a + b);
});

substractButton.addEventListener("click", function () {
    execOperation("scadere", (a, b) => a - b);
});

divideButton.addEventListener("click", function () {
    execOperation("impartire", (a, b) => a / b);
});

multiplyButton.addEventListener("click", function () {
    execOperation("inmultire", (a, b) => a * b);
});




