/**Nos piden realizar una agenda telefónica de contactos.**
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Las funciones serán:
------------------------

- aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
- existeContacto(Conctacto): indica si el contacto pasado existe o no.
- listarContactos(): Lista toda la agenda
- buscarContacto(nombre): busca un contacto por su nombre y muestra su telefono
-eliminaContacto(contacto):Elimina el contacto de la agenda, indica si se ha eliminado o no
-agendaLlena():indica si la agenda esta llena
-huecosLibres():indica cuantos contactos mas podemos ingresar
Usar localStorage para guardar la info de la agenda y para consultar sus datos*/

let agenda = JSON.parse(localStorage.getItem("contactos")) || [];
let memoria=0
class Contacto {
       constructor(nombre,telefono){
             this.nombre=nombre
             this.telefono=telefono
       }
}
 
function agregarContacto(nombre,telefono){
      
      if(agenda==[]){
            agenda.push(new Contacto (nombre,telefono))
            localStorage.setItem("contactos",JSON.stringify(agenda))
            memoria++   
      }
      else  if(agenda.length<=9){
            let band=false
            let valor=nombre
               for(let i in agenda){
                     if(agenda[i].nombre=== valor){
                       band=true 
                     }
               }
            if(band){
                  console.warn("Ya existe ese contacto en su agenda")
                 
            }
            else{
                  agenda.push(new Contacto (nombre,telefono))
                  localStorage.setItem("contactos",JSON.stringify(agenda))
                  memoria++  
               }
               
            
      } else{
               console.warn("Memoria insuficiente")
         } 
     
      
}
function listarContacto(){
  // let agenda=  agenda.sort(JSON.parse(localStorage.getItem("contactos")))
    agenda.sort(agenda.nombre)
      console.log("--------AGENDA TELEFONICA 📞-------")
       agenda.forEach(function (contacto) {
              console.log(`${contacto.nombre}`)
              console.log(`${contacto.telefono}`)
              console.log("-------------------------------------")
             
       });
}
function existeContacto(nombre){
         let valor =agenda.find(function(contact){
                return contact.nombre === nombre 
          })
         if(valor){
            console.log(`El contacto ${nombre} existe en su agenda`)
         }
         else{
            console.error(`${nombre} no esta en su agenda`)
         }
}

function buscarContacto(nombre){
        let bandera=false
       agenda.forEach(function(contacto){
             if(contacto.nombre===nombre){
                    bandera =true
                    console.log(`nombre :${nombre}`)
                    console.log(`telefono:${contacto.telefono}`) }
             })
       if(!bandera){
            console.warn("Contacto no existe") 
       }
}
function eliminaContacto(nombre){
       let index= agenda.findIndex(function(cont){
          return cont.nombre===nombre
       })
       if(index>-1){
             agenda.splice(index,1)
             localStorage.setItem("contactos",JSON.stringify(agenda))
             console.log("Contacto eliminado")
       }
       else{
          console.log("Contacto inexistente")
       }
}
function agendaLlena(){
      if(agenda.length== 10){
            console.log("Memoria llena")
      }
      else{
            console.log("Todavia tiene espacio")
      }
}
function huecosDisponible(){
     let disponible = 10-agenda.length
     if(agenda.length== 10){
           console.error("No hay espacio disponible en su agenda")
     }else{
      console.log(`El espacio disponible para ${disponible} contactos`)
     }
    
}