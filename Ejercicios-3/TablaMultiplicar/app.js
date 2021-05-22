/*
**Tarea 4**
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

function tabla(num){
      document.write(`LA TABLA DEL ${num}<br><br>`)
    for(let i=1;i<11;i++){
          document.write(`-${num} X ${i}=${num*i}<br>`)
    }
}
function ingreseValor(){
      let valor=(prompt("Ingrese un numero para mostrar su correspondiente tabla de multiplicar"))
      if(valor===null){
            console.error("Decidio cerrar el programa")
      }
      else if(isNaN(parseInt(valor))){
             console.error("No ingreso un valor numerico o dejo el campo vacio")
       }
       else{
             let numero=parseInt(valor)
            tabla(numero)
       }
}

