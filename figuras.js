//Codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
 
perimetroCuadrado();
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado() {
  return ladoCuadrado * ladoCuadrado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//Codigo del triangulo
console.group("triangulos")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
/*console.log("Los lados del triangulo miden: " 
  + ladoTriangulo1 
  + "cm, " 
  + ladoTriangulo2 
  + "cm, " 
  + baseTriangulo 
  + "cm."
);*/

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