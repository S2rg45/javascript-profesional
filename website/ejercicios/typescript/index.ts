// Interfaces
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}
//let muted: boolean = true
//let numerador = 50;
//arreglos
// let people: string[] = [];
//people = ["nombres"]
// let peopleAndNumbers: Array< string | number > = []
//peopleAndNumbers.push('nombres')
//peopleAndNumbers.push(9000)

//

// let comodin:any  = "jocker"
// comodin = {type: 'cambio'}

// let someObjetc: object = {type: 'cambio'}

// function add(a: number, b: number): number{
//   return a + b;
// }

// const sum = add(6,7);

// function createAdder(a: number): (number) => number {
//   return function(b: number){
//     return b+a
//   }
// }

// const addFour = createAdder(3);
// const fourPlusSix = addFour(7);

// function fullName(firstNAme: string, lastName?: string):string {
//   return `${firstNAme} ${lastName} `
// }

// const sergio = fullName('Sergio');

//interface

// enum color{
//   axul = "azul",
//   amarillo = "amarillo",
//   cafe = "cafe",
//   verde = "verde"
// }
// let colorFavorito: Color = Color.Verde;

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
