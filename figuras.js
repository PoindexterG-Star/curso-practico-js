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
  return (lado1 + lado2 + base);
} 


function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function trianguloIsoscelesAltura(lado1, lado2, base) {
  if (lado1 != lado2) {
    console.log("Los lados 1 y 2 no son iguales.");
  } else {
    
  }
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

function calcularPerimetroTriangulo() {
  const vlado1 = document.getElementById("inputTriangulo1");
  lado1 = parseInt(vlado1.value);
  const vlado2 = document.getElementById("inputTriangulo2");
  lado2 = parseInt(vlado2.value);
  const vbase = document.getElementById("inputTrianguloBase");
  base = parseInt(vbase.value);
  const valtura = document.getElementById("inputTrianguloAltura");
  altura = parseInt(valtura.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const vbase = document.getElementById("inputTrianguloBase");
  base = vbase.value;
  const valtura = document.getElementById("inputTrianguloAltura");
  altura = valtura.value;
  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularTrianguloIsosceles() {
  const vtri1 = document.getElementById("inputTri1");
  tri1 = vtri1.value;
  const vtri2 = document.getElementById("inputTri2");
  tri2 = vtri2.value;
  const vbase = document.getElementById("inputTriBase");
  base = vbase.value;

}



