/*Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
----------------------------------

- Las tareas que debe hacer son las siguientes:
 - Agregar producto al carrito*
 - Listar los productos del carrito 
 - Buscar un producto en el carrito 
 - Eliminar producto del carrito*/

   console.log("Quiere agregar productos")
   let compras=prompt("Ingrese los productos para cargarlos:")
   let array=[]
   
      while (compras!= null ) {
            array.push(compras)
            compras=prompt("Ingrese los productos para cargarlos:")      
}
  
  
   console.log("Lista de sus productos")
      for (let i=0; i<array.length;i++) {
            console.log(array[i]);
   }      

   console.log("buscar productos de su changuito")
   let producto=prompt("Ingrese el elemento a buscar:")
   let buscar=array.indexOf(producto)
   for (let i=0; i<array.length;i++) {
         if (buscar === -1) {
              console.log(`No se encuentra el producto: ${producto} en su carrito`) 
         }else{
               console.log(`el producto encontrado: ${producto}`)
         }
      
}      

   console.log("Eliminar productos de su changuito ")
  
   let eliminar=prompt("Ingrese el producto a eliminar:")
   while (eliminar!== null ) {
      let pos=array.indexOf(eliminar)
     
      for (let i=0; i<array.length;i++) {
            if (eliminar === array[i]) {
                  array.splice(pos,1)
                 console.log("producto eliminado")
            }
            else {
                  console.log("El producto no se encuentra en el carrito")
            }
         
      } 
    eliminar=prompt("Eliminar mas productos, Ingrese el nombre del mismo:")         
 }
 
