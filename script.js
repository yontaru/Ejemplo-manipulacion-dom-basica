const form = document.getElementById('form');
const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');

// con esto se puede hacer una suma en un formulario, creando un addEventListener y convirtiendo la información que se ingresa en los input a número con parseInt()

btn.addEventListener('click', SumarInputsValue);

function SumarInputsValue() {
   const sumaInputs = (parseInt(input1.value)  + parseInt(input2.value));
   pResult.innerText = "Resultado: " + sumaInputs;
};