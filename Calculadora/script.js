const num1 = document.querySelector("#firstNumber");
const num2 = document.querySelector("#secondNumber");

const button = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");

const result = document.querySelector("output.result");

const operadores = document.querySelectorAll(".operador");
const simbolo = document.querySelector("#simbolo");

let operacao = "+";


// Escolher a operação
operadores.forEach(function (botao) {

    botao.addEventListener("click", function () {

        operacao = botao.value;

        simbolo.textContent = botao.textContent;

    });

});


// Calcular
button.addEventListener("click", function () {

    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);

    let resultado;


    if (operacao === "+") {
        resultado = numero1 + numero2;
    }

    else if (operacao === "-") {
        resultado = numero1 - numero2;
    }

    else if (operacao === "*") {
        resultado = numero1 * numero2;
    }

    else if (operacao === "/") {

        if (numero2 === 0) {
            result.textContent = "Não pode dividir por 0";
            return;
        }

        resultado = numero1 / numero2;
    }


    result.textContent = resultado;

});


// Limpar
clearButton.addEventListener("click", function () {

    result.textContent = "0";

    num1.value = "";
    num2.value = "";

    operacao = "+";
    simbolo.textContent = "+";

});