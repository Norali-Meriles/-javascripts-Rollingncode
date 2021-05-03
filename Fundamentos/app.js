 //string
 let nombre="eugenio"
 let apellido="Gonzalez"
 let frase="  Bienvenido a la clase "

 //concatenar
 console.log("nombre, apellido")
 console.log(nombre + " " + apellido)
 //template sting
 console.log(`Mi nombre es ${nombre} ${apellido}`

 )
 //metodos de los string
 console.log(nombre.toUpperCase())//MAYUSCULA
 console.log(nombre.toLowerCase())//minuscula
 console.log(apellido.length)//cantidad de caracteres y para obtener la ultima seria apellido.legth-1
 console.log(apellido.charAt(4))//para posicionarme en la cuarto caracter contando apartir de 0
 console.log(apellido.charAt(nombre.length-1))// la ultima posicion de la palabra apellido
 console.log(apellido.substr(0,3));//parametros de substr)posicion, cantidad de caracteres)
 console.log(frase.trim())//para quintar los espacios en blancos andelante y despues de la palabras no en el medio
 //para capitalizar la variablke nombre dos formas
 
 console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1))
 console.log(nombre.charAt(0).toUpperCase() + nombre.substr (1, nombre.length - 1))
 //para sacar el maximo minimo,y la raiz cuadrada
  let prinumero=prompt(`Ingrese un numero`)
  let segnumero=prompt(`Ingrese un numero`)
  let ternumero=prompt(`Ingrese un numero`)
  
  console.log(`El numero mayor es: ${Math.max (prinumero,segnumero,ternumero)}`)
  console.log(`El numero menor es: ${Math.min (prinumero,segnumero,ternumero)}`)
  console.log(`La raiz cuadrada del segundo numero ingresado es: ${Math.sqrt(segnumero) }`)








