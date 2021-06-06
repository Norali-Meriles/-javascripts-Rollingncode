let usuarios=JSON.parse(localStorage.getItem("usuarios") ) || [];

class Usuario{
      constructor(name,username,email,password){
            this.name= name
            this.username=username
            this.email=email
            this.password=password
      }
}

function agregarUsuario(name,username,email,password){
          usuarios.push(new Usuario(name,username,email,password))
          localStorage.setItem("usuarios",JSON.stringify(usuarios))
}

function listarUsuario(){
      usuarios.forEach(function(usuario) {
            console.log(`Nombre: ${usuario.name}`)
            console.log(`Usuario: ${usuario.username}`)
            console.log(`Email: ${usuario.email}`)
            console.log("===================")
      });
}

function listUsuario(username){
      let user=usuarios.find(function(usuario){
            return usuario.username===username
      })
      if (user){
            console.log(`Nombre: ${user.name}`)
            console.log(`Usuario: ${user.username}`)
            console.log(`Email: ${user.email}`)
            console.log("===================")
      }else{
            console.warn("El usuario no existe")
      }
}

function eliminarUsuario(username){
     let idUser=usuarios.findIndex(function(usuario){
           return usuario.username===username
     })
     if(idUser>-1){
           let validar=confirm("Esta seguro que quiere eliminar el usuario")
           if(validar){
                 usuarios.splice(idUser,1)
                 localStorage.setItem("usuarios",JSON.stringify(usuarios))
                 console.log("El usuario ha sido eliminado")
           }
           
     }else{
           console.warn("El usuario no existe")
     }
}