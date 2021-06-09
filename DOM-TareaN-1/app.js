/*Números mágicos

Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

let contenido= document.querySelector(".interfaz")
let bot=null
let memoria=20

function numeroAleatorio(){
     return bot= Math.round(Math.random()*memoria)
}
 
function usuarioAdivina(){
      numeroAleatorio()
            switch(true){
                  case contenido.value ==  bot:
                  mensajeAlert("ADIVINASTE")
                  break;
                  case contenido.value > bot:
                  mensajeAlert("UPS TE PASASTE")
                  break;
                  case contenido.value < bot:
                  mensajeAlert("ESTAS CERCA") 
                  break;
                  default:
                  mensajeAlert("nOpcion")
                  break;
             }  
     
}


function mensajeAlert(mensaje){
 switch (mensaje) {
       case "ADIVINASTE":
       swal("Exelente", "!GANASTE🧨!","success");    
        break;
      case "UPS TE PASASTE":
      swal("LEJOS!" ,"👎", "error");
       break;
      case "ESTAS CERCA":
       swal("CERCA!", "🤏","error");
      break;
      case "nOpcion":
      swal("ERROR!", "valor invalido 🤦‍♀️", "error");
       break;
 }
}