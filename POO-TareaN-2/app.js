/*Escribe una clase Producto para crear objetos. 
----------------------------------------------------
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto{
     constructor(codigo,nombre,precio){
           this.codigo=codigo
           this.nombre=nombre
           this.precio=precio
     }
     imprimeDatos(){
           document.write("<br>--------------------<br>")
           document.write(`<u> Codigo </u> :  ${this.codigo}  <br> <u> Nombre </u> : ${this.nombre}  
           <br> <u> Precio </u> :  $ ${this.precio} `)
      }
     
}

      let producto1=new Producto(015,"Harina",200)
      let producto2=new Producto(016,"Aceite",350)
      let producto3=new Producto(017,"Yogurt",180)

      let listaProducto= [
            producto1,
            producto2,
            producto3
      ]
      for(let i=0;i<listaProducto.length;i++){
            listaProducto[i].imprimeDatos()
      }
   