/*
**Tarea 3**
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a + b)*/
 
function rectangulo(a=parseInt(prompt("Ingrese un valor para el lado de rectangulo")),b=parseInt(prompt("Ingrese un valor para el lado de rectangulo"))){
       if(isNaN(a) || isNaN(b)){
             console.error("No ingreso valores numericos o no ingreso ningun valor")
       }else {
             document.write("--------------PERIMETRO--------------- <br><br>")
              let p= 2*(a+b)
              document.write(`Su perimetro con los valores dados es:${p}`)
       }

}