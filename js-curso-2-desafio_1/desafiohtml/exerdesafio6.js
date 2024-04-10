let numero = parseInt(prompt("Insira um número"));
let multiplicado = multiplicacaoPorEleMesmo(numero);

function multiplicacaoPorEleMesmo(numero){
    return numero*numero
}
multiplicacaoPorEleMesmo(numero);
alert (`O ${numero} multiplicado por ele mesmo é igual a ${multiplicado}`);