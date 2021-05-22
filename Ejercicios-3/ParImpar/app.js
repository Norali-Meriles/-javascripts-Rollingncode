/*
**Tarea 2**
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function parImpar(valor=prompt("Ingrese un numero entero")){
      document.write("------------RESULTADOS-----------------<br>")
     while(valor!==null){
          let entero= parseInt(valor)
           
           if( isNaN(entero)){
                 document.write("No ingreso un numero o dejo el campo vacio<br>")
           }
           else{
            if(entero% 2===0){
                  document.write(`El valor ingresado ${entero}: ES PAR <br>`)
                
            }
            else{
                document.write(`El valor ingresado ${entero}: ES IMPAR <br>`)  
            }
           }
           valor=prompt("Ingrese un numero entero")    
     }
}
