let dolar = parseFloat(prompt("Insira um valor em dólares"));
let real = transformarReal(dolar);

function transformarReal(dolar){
    return dolar*4.80;
}
alert (`A tranferência do ${dolar} para reais é igual à ${real.toFixed(2)}`);
