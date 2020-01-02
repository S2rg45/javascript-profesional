
//console.log('a')
//setTimeout(() => console.log('b'), 2000)
//console.log('c')
//for ( i=0; i < 1000 ; i++ ) {
//}

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options =  { crossDomain:true }


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
            .get(url, options, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
        })
    }

function onError (id){
    console.log(`error en el ${id}`)
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var cambio = ids.map( id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(cambio)
        console.log(personajes)     
    } catch (id){
        onError(id)
    }
}

obtenerPersonajes()


//obtenerPersonaje(1)
  //  .then ((personaje) => {
    //console.log(`el persona 1 es ${personaje.name}`)
      //  return obtenerPersonaje(2)
   // })
   // .then(personaje2 => {
     //   console.log(`el persona 2 es ${personaje2.name}`)
       // return obtenerPersonaje(3)
   // })
   // .then(personaje3 => {
     //   console.log(`el persona 3 es ${personaje3.name}`)
       // return obtenerPersonaje(4)      
   // })
   // .then(personaje4 => {
     //   console.log(`el persona 4 es ${personaje4.name}`)
       // return obtenerPersonaje(5)      
   // })
   // .then(personaje5 => {
     //   console.log(`el persona  es ${personaje5.name}`)      
   // })
    //.catch(onError)

// promesas son valores que aun no conocemos
//promesa en estado pending si se resuelves que en estado
//fulfilted .then =>(var) si no queda rejected .catch(err) 
//new Promise (function (resolve, reject){
// 
//}).then (valor =>{

//}).catch (err => )



