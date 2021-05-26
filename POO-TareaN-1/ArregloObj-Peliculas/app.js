/*
**Arreglo de objetos: Películas**
Crear un arreglo de objetos que contenga datos de películas como:
- Título
- Género
- Año
- sinopsis
- Crea una función que permita mostrar en una lista cada película con sus datos.*/

let peliculas=[
      {Titulo:"LA VENTADA INDISCRETA ", Genero:"Suspense", Anio:1954, Sinopsis:"Un reportero fotográfico (Stewart), obligado a permanecer en reposo con su pierna escayolada, y a veces acompañado por su bella novia (Kelly) y su enfermera (Ritter), procura escapar al tedio de su convalecencia contemplando desde la ventana de su apartamento el otro lado del patio."},
      {Titulo:"AVATAR ", Genero:"Accion", Anio:2009, Sinopsis:"AVATAR nos lleva a un mundo situado más allá de la imaginación, en donde un recién llegado de la Tierra se embarca en una aventura épica."},
      {Titulo:"WONDER ", Genero:"Drama", Anio:2017, Sinopsis:"August Pullman (Jacob Tremblay) es un niño nacido con malformaciones faciales. La compasión y la aceptación de sus nuevos compañeros y del resto de la comunidad serán puestos a prueba."},
      {Titulo:"MI POBRE ANGELITO", Genero:"Comedia Infantil", Anio:1990, Sinopsis:"Kevin McCallister es un niño que está cansado de que sus hermanos, primos, tíos y padres se aprovechen de él sólo porque es pequeño. "},
]
function listaPeliculas(){
     for(let i in peliculas){
      document.write(`Titulo: ${peliculas[i].Titulo} Genero: ${peliculas[i].Genero} Anio: ${peliculas[i].Anio} Sipnosis: ${peliculas[i].Sinopsis}<br><br>`)
   }
 }
