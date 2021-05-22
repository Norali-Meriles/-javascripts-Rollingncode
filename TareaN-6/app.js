/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación*/

let veces=[]
//let ds = ts = cs = co = ss = st = och = ne = dis = os = dce =0;
let s2 = s3 = s4 = s5 = s6 = s7 = s8 = s9 = s10 = s11 = s12 = 0;
function Dados(){
      let dad=  parseInt(Math.random() *(7-1)+1) 
      return dad
}
/*function tiraDado1() {
      let dado1 = parseInt(6 * Math.random() + 1);
      return dado1;
    }
    
    function tiraDado2() {
      let dado2 = parseInt(6 * Math.random() + 1);
      return dado2;
    }*/
function lanzamientoDados(){
      for (let i=0;i<50;i++) {
           let suma=Dados() + Dados()
            console.log(`${suma}`)
            switch (suma) {
                  case 2:
                        s2++ 
                        break;
                   case 3:
                        s3++    
                         break;
                   case 4:
                         s4++    
                        break;
                  case 5:
                        s5++      
                        break;
                  case 6:
                        s6++      
                        break;
                   case 7:
                         s7++
                        break;
                  case 8:
                        s8++
                        break;
                   case 9:
                         s9++
                        break;
                  case 10:
                        s10++
                         break;
                  case 11:
                         s11++     
                         break;          
                   case 12:
                         s12++
                         break;
                  default:
                        break;
                  }                         
      }

      veces= [ "cantidad de veces que la suma fue = 2 : " + s2,"cantidad de veces que la suma fue = 3 : "+ s3, "cantidad de veces que la suma fue = 4 : " + s4,"cantidad de veces que la suma fue = 5 : " + s5,"cantidad de veces que la suma fue = 6 : " + s6,"cantidad de veces que la suma fue = 7 : " + s7,"cantidad de veces que la suma fue = 8 : " + s8,"cantidad de veces que la suma fue = 9 : " + s9,"cantidad de veces que la suma fue = 10 : " + s10,"cantidad de veces que la suma fue = 11 : " + s11,"cantidad de veces que la suma fue = 12 : " + s12, ]
      veces.map(function (res){
         document.write(` - ${res}<br>`)
 })
}
                 
   





 /* for(let i=1;i<=50;i++){
            sumaDados[i]= lanzaDados()+lanzaDados()
            console.log(`${sumaDados}`)
             
      }
      return sumaDados 
*/
/*let anotador = []

function dados(min , max){
    return Math.floor(Math.random() * (max - min) + min) ;
}

let primero = dados(1,7)
let segundo = dados(1,7)
let resultado = primero + segundo
console.log(`${primero} + ${segundo} = ${resultado} `)
console.log("----------------------------------")
    
anotador.push(primero + segundo)

for(i=0; i<=50; i++){

    let random = dados(1,6) + dados(1,6) 

    if(resultado === random){
        anotador.push(random)
    }
    else{
        console.log(`${i + 1} - ${random}`)
    }

}
console.log(anotador)*/
/*function dado1 (max, min) {
      return Math.floor(Math.random() * (max - min) + min);
  }
  function dado2 (max, min) {
      return Math.floor(Math.random() * (max - min) + min);
  }
  
  let tiradas = [];
  
  for (i=0; i < 50 ; i++){
  
      let suma = dado1(7,1) + dado2(7,1)
      tiradas.push(suma)
  }
  console.log(tiradas);*/
 /* document.write("Dados 🎲🎲 <br>")
let s2 = s3 = s4 = s5 = s6 = s7 = s8 = s9 = s10 = s11 = s12 = 0;
let veces= []
function tiraDado1() {
  let dado1 = parseInt(6 * Math.random() + 1);
  return dado1;
}

function tiraDado2() {
  let dado2 = parseInt(6 * Math.random() + 1);
  return dado2;
}

for (let i = 0; i < 50; i++) {
  let suma = tiraDado1() + tiraDado2();
  console.log(`${suma}`)
  switch (suma) {
    case 2:
      s2++;
      break;
    case 3:
      s3++;
      break;
    case 4:
      s4++;
      break;
    case 5:
      s5++;
      break;
    case 6:
      s6++;
      break;
    case 7:
      s7++;
      break;
    case 8:
      s8++;
      break;
    case 9:
      s9++;
      break;
    case 10:
      s10++;
      break;
    case 11:
      s11++;
      break;
    case 12:
      s12++;
      break;
    default:
      break;
  }

}

 veces= [ "cantidad de veces que la suma fue = 2 : " + s2,"cantidad de veces que la suma fue = 3 : "+ s3, "cantidad de veces que la suma fue = 4 : " + s4,"cantidad de veces que la suma fue = 5 : " + s5,"cantidad de veces que la suma fue = 6 : " + s6,"cantidad de veces que la suma fue = 7 : " + s7,"cantidad de veces que la suma fue = 8 : " + s8,"cantidad de veces que la suma fue = 9 : " + s9,"cantidad de veces que la suma fue = 10 : " + s10,"cantidad de veces que la suma fue = 11 : " + s11,"cantidad de veces que la suma fue = 12 : " + s12, ]
 veces.map(function (res){
    document.write(` - ${res}<br>`)
})*/