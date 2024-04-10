let altura = parseFloat(prompt("Informe a altura"));
let largura = parseFloat(prompt("Informe a largura"));
let area;
let perimetro;

function calcularArea(parAltura, parLargura){
    return area = parAltura*parLargura;
}

function calcularPerimetro(parAltura, parLargura){
    return perimetro = (parAltura*2)+(parLargura*2);
}

area = calcularArea(altura, largura);
perimetro = calcularPerimetro(altura, largura);

alert (`A área é ${area} e o perímetro é ${perimetro}`);