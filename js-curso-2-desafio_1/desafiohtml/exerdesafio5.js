let numero1 = parseInt(prompt("Insira o primeiro número."));
let numero2 = parseInt(prompt("Insira o segundo número."));
let maiorNumero = -1000;

function numeroMaior(){
    if (numero1>maiorNumero){
        maiorNumero=numero1;
    }
    if (numero2>maiorNumero){
        maiorNumero=numero2;
    }
}
numeroMaior();
alert (`O número maior é ${maiorNumero}`);