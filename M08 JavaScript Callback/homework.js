/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   //METODO TOuPERCASE --> 
   // Es un metodo que nos permite modificar las letras a mayusculas:
   // ej: 
   // var mario = mario.toUpperCase() --> "MARIO"

   //METODO SLICEL
   //nos permite hacer un recorte, le voy a pasar dos valores desde donde inicia hasta donde va el recorte
   // Ej: "hola".slice(1,2) --> "ol"
   // Ej: var recortar = "hola".slice(0,2) // --> "ho"
   // si solo le pasamos un valor me toma desde ahi hasta el final

return nombre[0].toUpperCase() + nombre.slice(1); 


//OTRA FORMA AI:
//   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
// En esta función, utilizamos nombre.charAt(0) para obtener la primera letra del nombre, luego usamos toUpperCase() para convertirla a mayúscula y finalmente concatenamos el resto del nombre con nombre.slice(1). Esto dará como resultado la primera letra en mayúscula y el resto del nombre en su forma original.
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb(); // llama al callback
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2); // --> CB esta representando a una funcion 
}

//cb (callBack) ES CUALQUIER FUNCION QUE HACE ALGUNA COSA EN PARTICULAR por ejemplo:

// Ejemplos sumar: 
// function suma(a,b) {
//    return a + b;
// }

// multiplicar
// function multiplicar(a,b) {
//    return a * b; 
// }


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = 0;

   arrayOfNumbers.forEach(function(numero){
      suma = suma + numero;
   })

   cb(suma);

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   array.forEach(function(elemento){
      cb(elemento);
   })
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var arrayNuevo = array.map(function(elemento){
     return cb(elemento);
   })
   
   return arrayNuevo;

  //el map retorna, y el foreach no.
  //el map retorna el nuevo arreglo con los nuevos valores que tendra el nuevo arreglo 
}


function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   // va a buscar elemento por elemento dentro del arreglo y si tiene la letra a en la primera posicion lo pusheamos al arreglo vacio 
 
   var filtered = [];
   for(var i = 0; i < arrayOfStrings.length; i++) {
      if(arrayOfStrings[i][0]=== "a") {
         filtered.push(arrayOfStrings[i]);
      }
  }
  return filtered;
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
