//- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión " - ".

/*nombre=prompt("Ingrese texto")
 let cadena=[]

  while (nombre) {
        cadena.push(nombre)
        nombre=prompt("Ingrese su nombre")
}
console.log(`${cadena.join("-")}`)*/
 
/*- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let num=prompt("Ingrese numeros")
let numeros=[]
let suma=0
while (num !== null ){
      num=parseInt(num)
      if( isNaN(num)){
            alert("Debe ingresar un numero")
           /* numeros.push(num)
            suma= suma+ num
            console.log("hola")*/
            num=prompt("Ingrese numeros")
      }else{
           suma=suma +num
           num=prompt("Ingrese numeros")
      }
      /*}
      else if(num === NaN){
            console.log("No ingreso un numero") 
      }*/
 } 
console.log(`la suma es esta: ${suma}`)  


/*- Realiza un script que cuente el número de vocales que tiene un texto y las muestre en pantalla.  */

/*let texto=prompt("Ingrese un texto :")
let suma=0
if(texto!==null){
      for (let i = 0; i<texto.length; i++) {
            switch (texto[i]) {
               case "a":
                         suma++
                         break;
               case "e":
                           suma++
                           break;
               case "i":
                     suma++
                     break;
               case "o":
                     suma++
                     break;
               case "u":
                      suma++  
                      break;              
              
            }     
         
   }
   console.log(`Cantidad de vocales que contiene el texto ingresado: ${suma}`)
} 
else{
      console.log("No ingreso texto ,Vuela a intentarlo")
      texto=prompt("Ingrese un texto")
}*/


