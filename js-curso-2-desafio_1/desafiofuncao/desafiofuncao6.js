let raio = parseFloat(prompt("Digite o raio do círculo"));
let area;
let perimetro;

function perimetroCirculo(xRaio){
    return (2*3.14*raio); 
}
perimetro = perimetroCirculo(raio);
alert (`O perímetro do círculo é ${perimetro.toFixed(2)}`);

function areaCirculo(xRaio){
    return 3.14*(raio*raio);
}
area = areaCirculo(raio);
alert (`A área do círculo ${area.toFixed(2)}`);