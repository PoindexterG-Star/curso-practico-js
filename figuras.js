//Codigo del cuadrado
console.group("cuadrados");


function perimetroCuadrado(lado) {
  return lado * 4;
}
 
perimetroCuadrado();


function areaCuadrado(lado) {
  return lado * lado;
}


console.groupEnd();


console.group("triangulos")


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
} 


function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}


console.groupEnd();

//Codigo del circulo
console.group("circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}



//PI
const PI = Math.PI;
console.log("PI es: " + PI + " cm");

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return (radio * radio) * PI;
} 


console.groupEnd();

// Aqui interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

//Circulo
function calcularDiametroCirculo() {
  const input = document.getElementById("inputCirculo");
  value = input.value;
  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  value = input.value;
  const area = areaCirculo(value);
  alert(area);
}

//Triangulo



