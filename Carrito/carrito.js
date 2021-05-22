
let  carrito=["BANANA","BICICLETA","HORNO","PARLANTES"]

function listarProductos(){
      console.log("Producto del carrito 🛒")
     /* for (let i = 0; i < carrito.length; i++) {
             console.log(`${i+1}- ${carrito[i]}`);
      }*/
      carrito.map(function(producto,index){
            console.log(`${index+1}- ${producto}`); 
      })
}

function agregarProductos() {
      producto=prompt("Ingrese un producto")
    /*  if(producto){
            carrito.push(producto.toUpperCase())
      }*/
      while(producto){
            carrito.push(producto.trim().toUpperCase())
            producto=prompt("Ingrese un producto")
            
      }
      listarProductos()
}
 
function buscarProducto(){
      let producto=prompt("Ingrese el producto a buscar")
      if(producto){
            let resultado=carrito.includes(producto.trim().toUpperCase())
            if(resultado){
                  console.log(`El producto ${producto.trim().toUpperCase()}  esta en el carrito`)
            }
            else{
                  console.warn("El producto no existe")
            }
      }
      else{
            console.error("No se ingreso un producto o cancelo el programa")
      }
}

function filtrarProductos(){
      let producto=prompt("Ingrese el producto o palabra")
      if(producto){
          let productos=carrito.filter(function(produc){
                return produc.indexOf(producto.trim().toUpperCase())>-1
          })
         // console.log("productos")
         if(producto.length>0){
                return productos
         }else{
               console.error("No se encontro ningun producto con esa busqueda")
         }
      }
      else{
            console.error("Campo vacio o cancelado")
      }
}

function eliminarProducto(){
       let pos=Prompt("Ingrese el numero del producto a eliminar")
       if(pos){
            pos=parseInt(pos)
            let producto=carrito[pos-1]
            if(producto !==undefined){
                  let validar=confirm(`Esta seguro que quiere eliminar ${producto} `)
                  if(validar){
                        carrito.splice(pos-1,1)
                        console.log(`Eliminado el producto ${producto}`)
                        listarProductos();
                  }
                
            }
            else{
                  console.erroe("No hay producto en esa posicion")
            }

       }else{
            console.error("Ocurrio un error y no es posible realizar la posicion") 
       }
}
