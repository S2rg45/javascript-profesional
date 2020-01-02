class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var { nombre,apellido } = this
        console.log(`hi my name is ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre,apellido)
        }
    }
    alto(){
        return this.altura > 1.8
    }
}

class desarrollador extends Persona {   
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var { nombre,apellido } = this
        console.log(`hi my name is ${nombre} ${apellido} soy desarrollador`)
        if (fn) {
            fn(nombre,apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log('desarrollador')
    }
}
 
//en esta clase vamos a ver 
//todo lo relacionado a clases pero en javascript se les llama prototipos
var sergio = new Persona('sergio', 'moreno', 1.76)
var erika = new Persona('erika', 'Luna', 1.89)
var celis = new desarrollador('camilo', 'celis', 1.90 )

sergio.saludar(responderSaludo)
erika.saludar(responderSaludo)
celis.saludar(responderSaludo)
//herencia prototype, se puede asemejar a un hijo
//al hablar de asyncronismos, simpre podemos pasar funciones como parametros