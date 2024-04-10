let altura = parseFloat(prompt("Me diga sua altura"));
let peso = parseFloat(prompt("Me diga seu peso"));
let imc;
function calcularIMC(parAltura, parPeso){
   return parPeso/(parAltura*parAltura);
}

imc = calcularIMC(altura, peso);
alert (`O valor do IMC é igual a ${imc.toFixed(2)}`);