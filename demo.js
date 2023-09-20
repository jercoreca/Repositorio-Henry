// BUCLE FOR

//los string se pueden recorrer todo string tiene un indise y arranca por el indice 0
// ej para acceder a un indice de una string // "hola"[0] < h

for (var i = 0; i < "hola".length; i++) {
    console.log("hola"[i]);
}

// var i = 0; DONDE VAMOS A INCIAR 
//i < String.length HASTA DONDE VAMOS A DECIR QUE VAYA hasta la longitud del string
// ACUMULADOR aumenta el valor de i (indice)


function encontrarVocalA(string) {
    for(var i = 0; i < string.length; i++) {
        if(string[i] === "a") {
            return "Encontramos la a en la palabra";
        } 
    }  // si el for no encuentra la a entonces ejecuta el codigo de abajo
    return "La palabra no tiene ninguna letra a";
}

console.log(encontrarVocalA("hola"));


// While 

// var contador = 1

// while(contador < 6) {
//     console.log("el numero del contador es " + contador);
//     contador++;
// }

// console.log(contador)


// DO WHILE 
 var contador = 1


 do {
    console.log("el numero del contador es " + contador);
    contador++;
 }
 while(contador < 6);


 // SWITCH
 
 function diaSemana(dia){
    switch (dia) {

        case "lunes":
            console.log("hoy es lunes");
            break; 

        case "martes":
            console.log("hoy es martes");
            break;
        
        case "miercoles":
            console.log("hoy es miercoles");
            break;

        case "jueves":
            console.log("hoy es jueves");
            break;

        case "viernes":
            console.log("hoy es viernes");
            break;

        default:
            console.log("el dia es finde, no es valido");
            break;
    }
 }

diaSemana("miercoles"); // < hoy es miercoles

// ARREGLOS (ARRAYS)
var comidas = ["pizza", "hamburguesas", "hotDog", "lasagna"];

for(comida of comidas) {
    console.log(comida);
}




// for(i = 0; i < comidas.length; i++) {
//     console.log(comidas[i]);
// }