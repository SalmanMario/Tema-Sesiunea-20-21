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
    console.log(firstNumber);
});

secondNumber.addEventListener("input", function (event) {
    const secondNumber = event.target.value;
    validateInput(secondNumber);
    console.log(secondNumber);
});

addButton.addEventListener("click", function () {

    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = first + second;

    console.log({ firstNumber, secondNumber });

    console.log(result);
    formResult.innerHTML = `Rezulatul operatiei de adunare este: ${result}`;
});

substractButton.addEventListener("click", function () {
    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = first - second;

    console.log({ firstNumber, secondNumber });
    console.log(result);
    formResult.innerHTML = `Rezulatul operatiei de scadere este: ${result}`;
});

divideButton.addEventListener("click", function () {
    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = first / second;

    console.log({ firstNumber, secondNumber });

    console.log(result);
    formResult.innerHTML = `Rezulatul operatiei de impartire este: ${result}`;
});

multiplyButton.addEventListener("click", function () {
    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = first * second;

    console.log({ firstNumber, secondNumber });

    console.log(result);
    formResult.innerHTML = `Rezulatul operatiei de inmultire este: ${result}`;
});




