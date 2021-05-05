//Numero condicionales

/*let primerNum=parseInt(prompt("Ingrese el primer numero:"))

let segundoNum=parseInt(prompt("Ingrese el segundo numer:"))

 if(primerNum>segundoNum){
       let suma=primerNum+ segundoNum
       console.log(`la suma de los numeros es: ${suma}`)    
 }else if(primerNum<segundoNum){
       let resta=segundoNum-primerNum
       console.log(`La resta del segundo con el primeer numero es :${resta}`)
 }else {
       let multiplicacion=primerNum*segundoNum
       console.log(`La multiplicacion de los numeros ingresados es:${multiplicacion}`)
 }*/

 //Operaciones condicionales

 let primerValor=parseInt(prompt("Ingrese el primer valor:"))
 let segundoValor=parseInt(prompt("Ingrese el segundo valor:"))
 let operacion=prompt("Ingrese una de las siguientes operaciones aritmeticas: +,-,*,/")
 
if(isNaN (primerValor )){
            primerValor=0
      console.log(`primer valor ingresado  NaN y lo inicializamos en ${primerValor} `) 
       if (isNaN(segundoValor) ){

            segundoValor=0
            console.log(`segundo valor ingresado  NaN y lo inicializamos en ${segundoValor} `)
       }
     
      
}else if(isNaN(segundoValor) ){

      segundoValor=0
      console.log(`segundo valor ingresado  NaN y lo inicializamos en ${segundoValor} `)
 }
else if(operacion!= null){
      switch (operacion.trim()) {
            case "+":
                  let sum=primerValor +segundoValor
                  console.log(`La suma es :${sum}`)
                  break;
                  case "-" :
                  let rest=primerValor -segundoValor
                  console.log(`La resta es :${rest}`)
                  break;
                  case "*":
                  let multi=primerValor * segundoValor
                  console.log(`La multiplicacion es :${multi}`)
                  break;
                  case"/":
                  let division=primerValor /segundoValor
                  console.log(`La division es :${division}`)
                  break;
      
            default:
                  console.error("No ingreso una operacion")
                  break;
      }
}
