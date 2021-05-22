//funciones
//Tareas
​
miFuncion();
​
//funciones declarativas
function miFuncion() {
  console.log("Hola Mundo");
}
​
let num1 = 34;
let num2 = 56;
​
function sumar(num1, num2) {
  console.log(num1 + num2);
}
​
// function calculadora(num1, num2, operacion) {
//   if (!num1 || !num2) {
//     return "Falta el valor";
​
//   }
​
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "Operacion inválida";
//   }
// }
​
function calculadora(num1 = 5, num2 = 10, operacion = "+") {
  if (!num1 || !num2) {
    return "Falta el valor";
  }
​
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operacion inválida";
  }
}
​
// let resultado = calculadora();
​
function cubo(num) {
  return Math.pow(num, 3);
}
​
function doble(num) {
  return num * num;
}
​
let numeros = [23, 45, 2, 67];
​
function converCubo(array, funcion) {
  let numerosAlCubo = [];
​
  // for...of
  for (let n of array) {
    numerosAlCubo.push(funcion(n));
  }
​
  //   for (let i = 0; i < array.length; i++) {
  //     numerosAlCubo.push(funcion(array[i]));
  //   }
​
  return numerosAlCubo;
}
​
//funciones anónimas
const saludar = function () {
  console.log("Hola pibes");
};
​
saludar();
// scope------------
let heroe="superman"//Variable global
function saludadHeroe(){
      let heroe="batman"//variable local
      console.log("Bienvenido ${heroe} ")
}
//callbacks
//son funciones que se envian como parametros y se ejucutan despues de un metodo
//son funciones anonimas.Una funcion que es enviada enviada como parametro es un callbacks

let numeros=[2,5,6,12,24]
let numerosOrdenados=numeros.sort(function(a,b){
      return a-b
})
//filter crea un nuevo arreglo con la condicion que le doy.me filtra los valores ej numeros pareces 
 let pares= numeros.filter(function(num){
       return num% 2=== 0
 })

//find devuelve el primer elemento que cumple la condicion .No devuelve un nuevo arreglo.. Y si no encuentra a jorge un elemento que no esta en el array me devuelve un undefined y si lo encuentra va me a devolver el primer elemento sin importar si hay otro mismi elemento
let alumnos=["lucas","Pablo","Fabrizio","jorge"]

alumnos.find(function(alumno){
      return alumno === "Lucas"
})

//Otra forma de iterar el ciclo for o for ...of no me devuelve un nuevo arreglo
//este ser el metodo map
//map:me devuelve un arreglo nuevo con el resultado de la funcion que yo mando como callback

let numerosDodles=numeros.map(function(num){
      return num*2
})






























