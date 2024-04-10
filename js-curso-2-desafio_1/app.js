let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";

function verificarBotao1() {
    console.log ("O botão 1 foi pressionado");
}

function verificarBotao2() {
    console.log ("O botão 2 foi pressionado");
    alert ("Eu amo JS");
}

function verificarBotao3() {
    console.log ("O botão 3 foi pressionado");
    let nomeCidade = prompt ("Qual o nome da sua cidade?");
    alert (`Estive em ${nomeCidade} e lembrei de você`);
}

function verificarBotao4() {
    console.log ("O botão 4 foi pressionado");
    let numero1 = parseInt(prompt("Escreva um número"));
    let numero2 = parseInt(prompt("Escreva outro número"));
    let soma;
    soma = numero1+numero2
    alert (`A soma de ${numero1} com ${numero2} é igual a ${soma}`);
}