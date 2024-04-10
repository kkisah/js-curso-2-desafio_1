let numero1 = parseInt(prompt("Insira o primeiro número."));
let numero2 = parseInt(prompt("Insira o segundo número."));
let numero3 = parseInt(prompt("Insira o terceiro número."));
let media = gerarMediaDosTresNumeros();
alert (`A média dos números é igual a ${media}`);

function gerarMediaDosTresNumeros(media){
    return (numero1+numero2+numero3)/3;
}