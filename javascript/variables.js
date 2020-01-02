//cuando se declaran variables con var siempre combiene declararlas desde el principio
//cuando declaramos las variables con let
//soalmente se puede utilizar en el bloque donde lo estamos utilzando
// const la variable solamente toma un valor unico y no podemos añadir un nuevo valor a la misma

//cuando utilizamos un ciclo for 

//for ( var i = 0; i < 10; i++ ){
  //  console.log(i)
//}

//function diasEntreFechas (fecha1, fecha2){
    //const unDia = 1000 * 60 * 60 * 24
    //const diferencia = Math.abs(fecha1 - fecha2)

  //  return Math.floor(diferencia / unDia)
//}

//const hoy = new Date()
//const nacimiento = new Date(1991, 2, 4)

//recursividad

//function divisiones (dividendo, divisor){
   // if ( dividendo < divisor){
      //  return 0
    //} 
  //  return 1 + divisiones(dividendo - divisor, divisor)
//}

//memoizacion

//function factorial (n){
  //  if (!this.cache){
    //    this.cache ={}
   // }

   // if  (this.cache[n]){
     //   return this.cache[n]
   // }

   // if (n === 1){
     //   return 1
   // }
   // this.cache[n] = n * factorial(n-1)
   // return this.cache[n]
//}

//clouseres nos permite manejar datos que se 
//puedan memorizar para volverlos 
// a utilizar en otra ocacion

//function crearSaludo(finalFrase) {
  //  return function(nombre){
  //      console.log(`hola ${nombre} ${finalFrase}`)
  //  }
//} 

//const saludoAr = crearSaludo('che')
//const saludoMe = crearSaludo('guey')
//const saludoCo = crearSaludo('amigo')

//saludoAr('sergio')
//saludoMe('sergio')
//saludoCo('sergio')

// estructura de datos inmutables

//const sergio = {
   // nombre: 'sergio',
   // apellido: 'moreno',
  //  edad: '28'
//}
//const cumpleanos = persona =>({
    //...persona, 
  //  edad: persona.edad + 1
//})
 
//bind cambia el this de la funcion para que no tome el valor en el window

//const persona = { nombre: 'Sacha' }

// let nombre = 'Pepe'

//     const persona = {
//       nombre: 'Sacha',
//       apellido: 'Lifszyc',
//       edad: 28,
//       saludar: function () {
//         console.log(`Hola, me llamo ${this.nombre}`)
//       },
//       decirAdios: function () {
//         console.log('Chau, me voy!')
//       }
//     }

//     const otraPersona = {
//       ...persona,
//       nombre: 'Eric',
//       edad: 24
//     }

//     nombre = 'Lucas'
//     otraPersona.saludar()
const persona = {nombre: 'Sacha'}
persona === { nombre: 'Sacha' }
//const sergio = {
     //nombre: 'sergio',
     //apellido: 'moreno',
   //  edad: '28'
 //}
 //function saludar(saludo){
   //  console.log (`${saludo} mi nombre es ${this.nombre}`)
 //}

// const saludarPedro = saludar.bind(sergio)

//saludar.call(sergio,'holas casd' )
//saludar.apply(sergio, ['holafg'])

