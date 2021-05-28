//  //string
  let nombre="eugenio"
  let apellido="Gonzalez"
  let frase="  Bienvenido a la clase "

//  //concatenar
  console.log(nombre,apellido)
  console.log(nombre + " " + apellido)
// //template sting
 console.log(`Mi nombre es ${nombre} ${apellido}`)

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

//  let respuesta="HELSINKI"
//  let acierto =false
//  let contador=0

//  while(contador<3 && acierto === false ){
          
//           let respUsuario = prompt("capital de filandia")

//            if (respUsuario.toUpperCase()=== respuesta ) {
//                   document.write("Muy bien! ACERTASTE")
//                   acierto=true
//             }
            
//             contador++
//  }
//  if(acierto===false){
//        document.write("lo sentimos no la pegaste LOSER!")
//  }

//Bucle:FOR
//estructura
// for(let i = 0;i<10;i++){
//       //acciones
//       console.log(i)
// }
//Tarea
//Ingresar la tabla que queremos calcular
//mostrar por consola la tabla

// let tabla=parseInt(prompt("Ingrese el numero de la tabla a calcular"))
// if(isNaN(tabla)){
//       console.error("Debe enviar un numero")
// }else {

// while(tabla!==NaN){
//       for(let i=1;i<=10;i++){
//             console.log(`${tabla} X ${i}=${tabla*i}`)
//       }
//       let tabla=parseInt(prompt("Ingrese el numero de la tabla a calcular"))
//  }

//  let tabla = prompt('Ingrese el numero de la tabla que desea calcular');
//ricardo
// let tabla=parseInt(prompt("Ingrese el numero de la tabla a calcular"))
//  if (tabla!==null){
 
//      tabla = parseInt(tabla);
 
//      while (isNaN(tabla)){
//          console.error('Debe ingresar un número.');
//          tabla = parseInt(prompt('Ingrese el número de la tabla que desea calcular'));
//      }
 
//      for(let i=1;i<=10;i++){
//          console.log(`${tabla} x ${i} = ${tabla * i}`);
//      } 
//  }
//FABRI : Donde el usuario va ingresar un NaNan o apretar cancelar y va parar la funcion de while//con While(tabla )
//  let tabla = parseInt(prompt("numero"));
// while (tabla) {
//   for (let i = 1; i <=10; i++) {
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
//   }
//   tabla = parseInt(prompt("numero"));
// }
//Array o arreglos
//listas
//mutacion de un arreglo
//metodos
//  let alumnos=["pablo", "Fabri","laura", "norali","walter"]
// //acceder a un elemento dentro del arreglo
// // alumnos[2]
// //Para obtener el ultimo elemento 
//   alumnos[alumnos.length -1]
// //Concatenar todos los elementos en un string
//        alumnos.join()
// //Iterar o recorrer un arreglo 
//       for (let i=0; i<alumnos.length;i++) {
//             console.log(alumnos[i]);
            
//       }
// //Agregar elementos al final del arreglo
// alumnos.push("jorge")
// //Eliminar el ultimo elemento
// alumnos.pop()
// //añadir un elemento al priincipio
// alumnos.unshift("walter")
// //eliminar un elemento del principio
// alumnos.shift()
// //Encontra el indice de un letra o porcion de palabra(posicion) de acuerdo a lo q el usuario ingresa si el elemento existe me va a mostra la posicion del mismo y no existe me devuelve siempre un -1 una forma de saber que no esta
// console.log(alumnos.indexOf("fabri"))
// //otra forma de saber si el elemento esta en el arreglo 
// console.log(alumnos.includes("pepa"))
//eliminar un elemento mediante suposicion ,tenemos que saber la posicion
// let pos=1
// alumnos.splice(pos,1)
 /*borra todo con splice seria lo mismo que inicializar un arreglo sin ningun elemento
 alumnos.splice(0)
alumnos=[]*/
//Eliminar varios elementos a partir de una posicion
 //let alumnosEliminados= alumnos.splice(0,3)

 //Remplazar valores hay que tener cuidado porque la cantidad de elementos que elimino tiene que ser igual a la cantidad de elementos que le estoy pasando, sino pierdo elementos..y si le paso mas elementos de la cantidad de elementos a modificar ..seria que estoy asignando esos nuevos valores al array 
 //caso1 alumnos.splice(0,2,"Daniel","Juan")
 //caso2 alumnos.splice(0,2,"Daniel",)
 //caso3 alumnos.splice(0,2,"Daniel","Juan","julian")
 //Hay que tener cuenta porque puedo mandar elementos repetidos
 //concatenar dos array este metodo me crea un nuevo arreglo no esq me modifica
   // let comision=alumnas.concat(alumnos)
   //tambien se puede concatenar mas de dos arrays
  // let school=alumnos.concat(mentores,comision,alumnos)
  //Invierte el orden
// School.sort()  //ordena por orden alfabetico
  //let schoolAZ=School.sort()
  // schoolAZ.reverse() de schoolAZ me lo invierte aasi como estaprevianmete ordenado de az
  //no funciona con numeros(con funciones) solo con string
  //let respuesta=["🥚", "🐔"]
  //Extrae una porcion del array sobre ek que se llama y devuelve un nuevo array
  //let alumnosEspeciales=alumnos.slice(1,3)//posicion inicial y posicion final 