/*
**Tarea1:**
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas*/
let palabra=" "
function mayusMinus( palabra= prompt("Ingrese un cadena de texto: ")){
      document.write("Comprobamos si ingresaste palabras en mayuscula y minuscula 🌸🏵 <br> <br>")
       switch(palabra){
                  case palabra.toUpperCase() :
                        document.write(`La cadena de texto ingresada esta en mayuscula :${palabra} `)
                        break;
                  case palabra.toLowerCase() : 
                        document.write(`La cadena de texto ingresada esta en minuscula :${palabra} `)  
                        break;     
                  default:
                        document.write(`La cadena de texto ingresadatiene mayusculas y minusculas : ${palabra} `) 
                        break;
            }

 }
      
       
 




/*if( parseInt(palabra)!==isNaN){
if(palabra === palabra.toUpperCase()){
      document.write(`La cadena de texto ingresada ${palabra} esta en mayuscula ${palabra.toUpperCase()}`)
}else if(palabra===palabra.toLowerCase()){
    document.write(`La cadena de texto ingresada ${palabra} esta en minuscula ${palabra.toLowerCase()}`)
}else{
    document.write(`La cadena de texto ingresada ${palabra} tiene mayusculas y minusculas `) 
    else{
      document.write("No ingrese una cadena texto")
}*/