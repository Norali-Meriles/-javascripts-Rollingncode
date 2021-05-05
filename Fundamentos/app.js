//  //string
//  let nombre="eugenio"
//  let apellido="Gonzalez"
//  let frase="  Bienvenido a la clase "

//  //concatenar
//  console.log("nombre, apellido")
//  console.log(nombre + " " + apellido)
//  //template sting
//  console.log(`Mi nombre es ${nombre} ${apellido}`

//  )
//  //metodos de los string
//  console.log(nombre.toUpperCase())//MAYUSCULA
//  console.log(nombre.toLowerCase())//minuscula
//  console.log(apellido.length)//cantidad de caracteres y para obtener la ultima seria apellido.legth-1
//  console.log(apellido.charAt(4))//para posicionarme en la cuarto caracter contando apartir de 0
//  console.log(apellido.charAt(nombre.length-1))// la ultima posicion de la palabra apellido
//  console.log(apellido.substr(0,3));//parametros de substr)posicion, cantidad de caracteres)
//  console.log(frase.trim())//para quintar los espacios en blancos andelante y despues de la palabras no en el medio
//  //para capitalizar la variablke nombre dos formas
 
//  console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1))
//  console.log(nombre.charAt(0).toUpperCase() + nombre.substr (1, nombre.length - 1))
 //para sacar el maximo minimo,y la raiz cuadrada
//   let prinumero=prompt(`Ingrese un numero`)
//   let segnumero=prompt(`Ingrese un numero`)
//   let ternumero=prompt(`Ingrese un numero`)
  
//   console.log(`El numero mayor es: ${Math.max (prinumero,segnumero,ternumero)}`)
//   console.log(`El numero menor es: ${Math.min (prinumero,segnumero,ternumero)}`)
//   console.log(`La raiz cuadrada del segundo numero ingresado es: ${Math.sqrt(segnumero) }`)

//condiciones if y else
/*    let num=7

    if(num % 2=== 0){
        console.log("El numero es par")
     }else{
        console.warn("El numero no es par")
  }*/
//-----------------------------------------------------
 /*let num=10

 if( num===10){
       console.log("El numero es igual a 10")
   }else if(num < 10){
       console.log("El numero es menor que 10")
  }else{
      console.log("El numero es mayor que 10")
 }*/

 //---------------------------------------------------

//fiesta
//Solo puede entrar mayor de edad>=18
//Si no es mayor de edad entonces debe ir acompañada de un tutor

/* let edad= 8
 let tutor= false
 if(edad>=18){
       console.log("Bienvenido a la joda")
 }else if(tutor=== true){
       console.log("Bienvenidos a la JODA!! no se separe de su tutor")
  }else{
        console.log("Salga de aqui, usted no puede disfrutar de la vida")
  }*/

 /*if(edad<18 && tutor===false){
       console.log("Salga de aqui")
 } else if( edad>=18 || tutor=== true){
      console.log("Bienvenido a la fiesta")
 }*/

 //------------------------------------------------------------

/* ESTRUCTURA CONDICIONAL
         SWITCH
    switch (key) {
       case value:
             //accion
             break;

       default:
             //accion puede estar o no
            break;
 }*/

 /*let numero= 7
 

 switch (numero) {
       case 10:
              console.log("El numero es 10")
              break;
       case 25:
             console.log("El numero es 25")
             break;
       case 3:
             console.log("El numero es 3")
             break;
        default:
             console.log("El numero es otro valor")
              break;
  }*/

 //---------------------------------------------------------

 /* let diaNumero=new Date().getDay()
  switch (diaNumero) {
       case 0:
              console.log("Hoy es domingo")
             
              break;
             case 1:
              console.log("Hoy es lunes")
             
              break;
             case 2:
              console.log("Hoy es martes")
             
              break;
              case 3:
             console.log("Hoy es miercoles")
             
              break;
              case 4:
             console.log("Hoy es jueves")
             
              break;
              case 5:
              console.log("Hoy es viernes")
             
            break;
 
       default:
              console.log("Entonces es sabado")
              break;
  }
*/

// ----------- (swictch con condiciones distinta a == ) --------------------

/*  let num=5
  switch (true) {
        case num===10:
              console.log("el numero es igual a 10")
              break;
              case num % 2 ===0:
                   console.log("el numero es par")
                   break;
        default:
             console.log("no es que mas hacer")
              break;
  }*/

//------------------------------------------------------------------

 /* let comando=prompt("Ingrese un comando(alerta, consola, print)")
  switch (comando) {
       case "alerta":
              alert("Usando switch en un alert")
              break;
       case"consola":
              console.log("usando swich en la consola")
              break;
       case"print":
              document.write("usando swich en el navegador")
             break;
       default:
              console.error("No existe ese comando, no sea mala persona")
              break;
  }*/

//--------------------BUCLES----------------------------
        //white

 /* mientras condicion
        entonces accion
*/
//----------------------

 /*let vecesSumar=10
 let totalSuma=0

 while(vecesSumar>0){
       totalSuma += 1
       vecesSumar -= 1
       console.log(`totalSuma: ${totalSuma} | vecesSumar:${vecesSumar}`)
 }
 console.log(`Total= ${totalSuma}`)*/

//----------------------------

 let respuesta="HELSINKI"
 let acierto =false
 let contador=0

 while(contador<3 && acierto === false ){
          
          let respUsuario = prompt("capital de filandia")

           if (respUsuario.toUpperCase()=== respuesta ) {
                  document.write("Muy bien! ACERTASTE")
                  acierto=true
            }
            
            contador++
 }
 if(acierto===false){
       document.write("lo sentimos no la pegaste LOSER!")
 }







