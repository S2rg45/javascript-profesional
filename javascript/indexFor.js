var sergio ={
    nombre: 'Sergio',
    apellido: 'Moreno',
    edad: 30,
    peso:80
}

console.log(`al inicio del año ${sergio.nombre} pesa ${sergio.peso}kg`)

const peso = 0.4
const aumentarPeso = person => person.peso += peso
const perdidaPeso = person => person.peso -= peso
const meta = sergio.peso - 3
const comida = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4

var dias = 0

while (sergio.peso > meta) {
    if (comida()){
        aumentarPeso(sergio)
    }
    if (deporte()){
        perdidaPeso(sergio)
    }
    dias ++
}


//for ( var i=1; i <= 365; i++){
  //  var random = Math.random()
    //if (random < 0.25){
      //  aumentarPeso(sergio)
   // }else if ( random < 0.5 ) {
     //   perdidaPeso(sergio)
   // }
//}

console.log(`pasaro ${dias} dias hasta que ${sergio.nombre} adelgazo ${sergio.peso.toFixed(2)}kg`)