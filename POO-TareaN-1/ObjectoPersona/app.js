/***Objeto Persona**
Crear un objeto llamado persona que contenga los siguientes atributos:
Nombre
Edad
DNI
Domicilio
Hijos (cantidad)
Profesión
Agregar Métodos:
Saludar ( mensaje de presentación en navegador o consola)
Listar (muestra la lista con los datos de la persona)*/
let persona={
      Nombre:"Pablo Marino",
      Edad:39,
      DNI: 45673289,
      Domicilio: "B° Guemes",
      Hijos: 0,
      Profesion: "Empresario",
      Saludar:function(){
            document.write(`Hola soy: ${this.Nombre} <br> `)
      },
      Listar:function(){
            document.write(`------Datos de ${this.Nombre}--------<br>`)
            for(let i in persona){
                  document.write(`${i} : ${persona[i]}<br>`)
            }
      },

}