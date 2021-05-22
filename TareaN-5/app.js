/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades=[]
let ciudad=prompt("Ingrese una ciudad , si no lo desea puede salir con cancelar o 0")
while(ciudad!="0" && ciudad !== null){
      if(ciudad!== ""){
            ciudades.push(ciudad.trim().toUpperCase())
           
      }else{
            console.log("No ingreso nada, Vuelva a ingresar si asi lo desea")
      }
      ciudad=prompt("Ingrese una ciudad , si no lo desea puede salir con cancelar o 0") 
}
console.log(` ${ciudades}`)

function cantidadCiudades(){
     if(ciudades.length === 0){
           console.error("No ingreso ninguna ciudad")
     }
     else{    
      console.log(`Cantidad de ciudades ingresadas: ${ciudades.length}`)
     }    
      
}


function mostrarCiudades(){
      document.write("Ciudades 🗽")
      document.write("<br>")
         if(ciudades.length >3){
            document.write(` 1 ${ciudades[0]}`)
            document.write("<br>")
            document.write(` 3 ${ciudades[2]}`)
            document.write("<br>")
            document.write(` ${ciudades.length} ${ciudades[ciudades.length-1]}`)
         }
         else{
               ciudades.map(function(ciudades,index){
                        document.write(`${index+1}  ${ciudades}`)
                        document.write("<br>")
               })
         }             
}


function agregarCiudad(){
     ciudades.push("PARIS")
     console.log("PARIS fue agregado a ciudades")
}




function segundaPocision(){
       if(ciudades.length>=3){
            document.write(`En segunda posicion se encuentra: ${ciudades[2]}`)
       }else{
             document.write("No existe la posicion")
       }
    
}

function sustituirCiudad(){
      if(ciudades.length>=3){
            let validar=confirm(`Esta seguro que quiere sustituir ${ciudades[2]} por BARCELONA`)
            if (validar) {
                  
                  ciudades.splice(2,1,"BARCELONA")
            }
            else{
                console.warn("No se realizo ningun cambio");
            }
            
      }
      else{
            console.error("No existe la posicion")
      }


}

















