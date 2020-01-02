var sergio = {
    nombre: 'sergio',
    apellido: 'moreno',
    ciudad: 'Bogota',
    edad: 28,
    ingeniero: true,
    cocinero:true,
    dj: false,
}
var juan = {
    nombre: 'juan',
    apellido: 'moreno',
    edad:10
}

function profesiones(person){
    console.log(`${person.nombre} es:`)
    
    if (person.ingeniero ) {
    console.log('Ingeniero')
    }else {
        console.log('no es ingeniero')
    }

    if (person.cocinero){
        console.log('cocinero')
    }
    if(person.dj){
        console.log('dj')
    }else {
        console.log('no es dj')
    }
}

const mayoriaDeEdad = 18

const esMayorDeEdad = ({ edad }) => edad >= mayoriaDeEdad
const esMayorDedad = ({ edad }) => edad >= mayoriaDeEdad

function mayorMenor(person){
    if(esMayorDeEdad(person)){
        console.log(`${person.nombre} es mayor de edad`)
    } else {
        console.log(`${person.nombre} es menor de edad`)
    }
}

function  permitirAcceso(person){
    if (!esMayorDedad(person)){
        console.log(`ACCESO DENEGADO ${person.nombre}`)
    } else {
        console.log(`ACCESO CONCEDIDO ${person.nombre}`)
    }
}


