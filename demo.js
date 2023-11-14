// // BUCLE FOR

// //los string se pueden recorrer todo string tiene un indise y arranca por el indice 0
// // ej para acceder a un indice de una string // "hola"[0] < h

// for (var i = 0; i < "hola".length; i++) {
//     console.log("hola"[i]);
// }

// // var i = 0; DONDE VAMOS A INCIAR 
// //i < String.length HASTA DONDE VAMOS A DECIR QUE VAYA hasta la longitud del string
// // ACUMULADOR aumenta el valor de i (indice)


// function encontrarVocalA(string) {
//     for(var i = 0; i < string.length; i++) {
//         if(string[i] === "a") {
//             return "Encontramos la a en la palabra";
//         } 
//     }  // si el for no encuentra la a entonces ejecuta el codigo de abajo
//     return "La palabra no tiene ninguna letra a";
// }

// console.log(encontrarVocalA("hola"));


// // While 

// // var contador = 1

// // while(contador < 6) {
// //     console.log("el numero del contador es " + contador);
// //     contador++;
// // }

// // console.log(contador)


// // DO WHILE 
//  var contador = 1


//  do {
//     console.log("el numero del contador es " + contador);
//     contador++;
//  }
//  while(contador < 6);


//  // SWITCH
 
//  function diaSemana(dia){
//     switch (dia) {

//         case "lunes":
//             console.log("hoy es lunes");
//             break; 

//         case "martes":
//             console.log("hoy es martes");
//             break;
        
//         case "miercoles":
//             console.log("hoy es miercoles");
//             break;

//         case "jueves":
//             console.log("hoy es jueves");
//             break;

//         case "viernes":
//             console.log("hoy es viernes");
//             break;

//         default:
//             console.log("el dia es finde, no es valido");
//             break;
//     }
//  }

// diaSemana("miercoles"); // < hoy es miercoles

// // ARREGLOS (ARRAYS)
// var comidas = ["pizza", "hamburguesas", "hotDog", "lasagna"];

// for(comida of comidas) {
//     console.log(comida);
// }




// // for(i = 0; i < comidas.length; i++) {
// //     console.log(comidas[i]);
// // }





// //OBJETOS: 

// var objetoNuevo = { }

// delete usuario.nombre


// var objetoUsuario = {
//     nombre: "jose",
//     edad: 29,
//     profesion: "maestro",
//     online: true
// }

// //CLASES

//FUNCIONES CONSTRUCTORAS
// function Gato(nombre,edad, dueno) {
//     this.nombre = nombre;
//     this.edad = edad; 
//     this.dueno = dueno;
//     this.maullar = function() {
//         return "Mi nombre es " + this.nombre + "...Meow!"
//     }
// }



// function Gato(nombre,edad, dueno) {
//     this.nombre = nombre;
//     this.edad = edad; 
//     this.dueno = dueno;
//     this.maullar = function() {
//         return "Mi nombre es " + this.nombre + "...Meow!"
//     }
// }

// // PROTOTYPE:
// Gato.prototype.color = function(color) {
//     this.color = color; 
// };   


// var gato1 = new Gato("Michi", 10, "Joaco")
// var gato2 = new Gato("Canela", 3)


// PROTOTYPE:
// Gato.prototype.decirEdad = function() {
//     console.log(this.edad);
// }
// 1ero el nombre de la calse que queremos acceder
// 2do prototype  y despues el nombre del metodo con el que voy a guardar la funcion 


//  //instancia de clase
// var gato1 = new Gato("Michi", 10, "Joaco")
// var gato2 = new Gato("Canela", 3)

// console.log(gato1.decirEdad());
// // // console.log(gato1);
// // console.log(gato1.maullar())



//La otra forma de escribir con class
// class Gato {
//     constructor(nombre, edad, dueno) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.dueno = dueno;
//         this.maullar = function () {
//             return "Mi nombre es " + this.nombre + "...Meow!";
//         };
//     }
// }

// //instancia de clase
// var gato1 = new Gato("Michi", 10, "Joaco")
// var gato2 = new Gato("Canela", 3)

// // console.log(gato1);
// console.log(gato1.maullar())


// HERENCIA
class Animal {
    constructor(nombre, raza, filum) {
        this.nombre = nombre,
        this.filum = filum;
        this.ladrar = function () {
            console.log("Guau!");
        }
    }
}

//queremos acceder a las mismas caracteristicas de la clase animal 
class Perro extends Animal {  // la clase perro se extiende de la clase animal 
constructor(nombre,raza, color) { // las propiedades de cada perro
    super(nombre); // las propiedades de la clase animal que estoy tomando 
    this.raza = raza;
    this.color = color; 
}
}

var perrito1 = new Perro ("Firulais", "dalmata", "Blanco");

console.log(perrito1)

console.log(perrito1.ladrar())

// ESTAMOS UTILIZANDO PROPIEDADES QUE YA ESTABAN CREADOS EN OTRO LADO 