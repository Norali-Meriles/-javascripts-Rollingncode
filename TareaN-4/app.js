/*Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
----------------------------------

- Las tareas que debe hacer son las siguientes:
 - Agregar producto al carrito
 - Listar los productos del carrito 
 - Buscar un producto en el carrito 
 - Filtrar productos según una palabra
 - Eliminar producto del carrito*/

 let carrito=[]
 let producto=prompt("Agregue un producto a su carrito") 
 function Agregar(elem){
           carrito.push(elem)
       
     return carrito   
 }
  function listar(array){
          for(let i=0;i<array.length;i++){
                console.log(`- ${array[i]}`)
          }
     return array
  }

 while(producto!==null){
       
           Agregar(producto)
           producto=prompt("Agregue un producto a su carrito") 
      
   
 } 
 if(producto=== null){
       listar(carrito)
 }
 //let m=prompt("Elemento a bucar")
 let m=prompt("Ingrese el producto a buscar")    
 let mostrar=carrito.find(function(elem){
             if(elem===m){
                   return elem
             }             
 })
 if(mostrar!==undefined){
      console.log(`Encontramos: ${mostrar}`)
 }
 else{
      console.log("No se encuentra el producto en su carrito")
 } 

  let parteProd=prompt("Busque el producto de acuerdo a algunas letras")
  let carrito1=carrito.filter(function(elem){
        return elem.indexOf(parteProd)!== -1      
  })
 console.log(`${carrito1}`)

 let eliminado=prompt("Ingese el producto a eliminar")

 function eliminar(array, elem){
        for(let i=0;i<array.length;i++){
               if(elem === array[i]){
                 return array.splice(i,1)
               }
              
        }
      
 }
  let carritoNuevo=eliminar(carrito,eliminado)
 
console.log("Carrito depurado:")
listar(carrito)




