/*- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

num=parseInt(prompt("Ingrese numeros"))
suma=0

while(num == NaN){
         suma=suma+num
         num=parseInt(prompt("Ingrese numeros"))
      }     

console.log("la suma es + suma")