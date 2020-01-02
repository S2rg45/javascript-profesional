var camila = {
    nombre:'camila',
    apellido:'moreno',
    altura: 1.56,
    libros: 8
}

var camilo = {
    nombre:'camilo',
    apellido:'moreno',
    altura: 1.87,
    libros:100
}

var andres = {
    nombre:'andres',
    apellido:'moreno',
    altura: 1.20,
    libros:200
}

var sergio = {
    nombre:'sergio',
    apellido:'moreno',
    altura: 1.80,
    libros:100
}

var carlos = {
    nombre: 'carlos',
    apellido:'moreno',
    altura: 1.90,
    libros:50
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [camila, camilo, andres, sergio, carlos]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarALturaCms = persona => ({ ... persona,
    altura: persona.altura * 100 })

var centimetros = personas.map(pasarALturaCms)

//console.log(centimetros)
//console.log(personasBajas)

//for (var i = 0; i < personas.length; i++ ) {
  //  var persona = personas[i]
    //console.log (`${persona.nombre} mide ${persona.altura}`)
//}


//var acum = 0
//for (var i = 0; i < personas.length; i++){
 //   acum = acum + personas[i].libros
//}

//console.log(`El total de libros son ${acum}`)
const reducer = (acum, {libros}) =>   acum + libros

var totaLibros = personas.reduce(reducer, 0)

console.log(`El total de libros son ${totaLibros}`)