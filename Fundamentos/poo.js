//Funciones contructoras
//plantilla para crear varios objectos
//propiedades o moldes
//metosos

//auto
/*
color:color
marca:fiat
modelo:
cant. puertas
metodos:
arrancar()
apagarse()
moverse()
*/
function Movies(titulo,sipnosis,director,reparto){
      this.titulo=titulo;
      this.sipnosis=sipnosis;
      this.director=director;
      this.reparto=reparto
}
Movies.prototype.listar=function(){
      console.log("Titulo: this.titulo")
      console.log("Sipnosis:this.sipnosis")
      console.log("Director: this.director")
      console.log("======================")

}

let jurassic= new Movies("Jurasis Park","dinosaurios que escapan y atacan érsonas","Steven Spielberh","Carlos, Hermonia,Jose,Alberto")
let avengers=new Movies("The Avengers","Superheroes que salvan al mundo","Marvel","Steve Roger, Rosita")
//---------------------------------------

//clases a diferencia de funcion contructora me permite crear metosdos adentro de la clse
//contenedor
///intancias
//funcion contructora=>plantillas
//objectos=>propiedades,metodos
//intansias=> todos los objectos derivan de una clase o funcion contructora
//persona=>nombre,apellido,edad,dni,domicilio
//       =>saludar(),estudiar(),

class Persona{
      constructor(nombre,apellido){
           this.nombre=nombre
           this.apellido=apellido
      }
      saludar(){
            console.log(`Hola soy ${this.nombre}${this.apellido}`)
      }
}
let persona1=new Persona("Fabrizio","Tonin")
let persona2=new Persona("Norali","Meriles")

//herencia
// extends palabra clave se utiliza para crear una clase secundaria de otra la principal
class Profesor extends Persona{
        constructor(nombre,apellido,materia){
             super(nombre,apellido)
             this.materia=materia 
        }
        presentacion(){
              console.log(`Buen dia justos aprenderemos ${this.materia}`)
        }
}

let profe1=new Profesor("Fabrizio","Tonin","React Native")

