/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   // array.length nos da el numero de elementos del arreglo
   // 
   return array[array.length - 1]; // ya que el indice comienza en 0 por eso el -1
}  // Ej: mi arreglo [1,2,3,4] --> length 4 elementos pero si quiero acceder al elemento 4
// le restamos -1 al para poder accerder al ultimo elemento del arreglo ya que el indice comienza en 0 entonces ahi si accedo al valor 4

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
 for (var i = 0; i < array.length; i++ ) {
   array[i] = array [i] + 1;
 }
 return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
// estaria mal de la siguiente manera : 
// return array.push("elemento")

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
// estaria mal de la siguiente manera : 
// return array.unshift("elemento") nos devolveria el largo del arreglo el total de elementos

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

//SOLUCION TIPICA: guardamos en una variable el resultado de llamar el arreglo.reduce con la 
// funcionalidad por dentro del () que hace la funcion recibe el acumulador y recibe la palabra (palabra es una referencia que tiene los elementos del arreglo)
// el return tiene un acumulador va a tomar la primera palabra luego une la segunda palabra
   var frase = palabras.reduce(function(acc, palabra){
      return acc + " " + palabra; // "hello" + " " + "world" lo une.
   })
 return frase;
}

//SOLUCION CALLBLACK tengo la funcion por fuera  
// function union(acc, palabra) {
//    return acc + " " + palabra;
// }

// var concatenacion = palabras.reduce(union);
// return concatenacion;

function arrayContiene(array, elemento) { // array [1, 2, 4, 58, 8] elemento es 4 return true si no lo encuentra false
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(var i = 0; i < array.length; i ++) {
      if(array[i] === elemento) {
         return true;
      } 
   } // importante NO poner un else dentro de un for porque en la primera que no lo encuentre va a ser false
   return false; // el descarte
}

function agregarNumeros(arrayOfNums) { //arrayOfNums = [1, 2, 3, 4, 10] --> 20
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = arrayOfNums.reduce(function(acc, numero){ // acc es el acumulador. numero es una variable muda hace referencia a los elementos del arreglo
      return acc + numero;
   })
   return suma;
}

//CALLBLACK
// function sumar(acc, numero) {
//    return acc + numero;
// }

// var sumatorias = numero.reduce(sumar);
// return sumatorias; 

function promedioResultadosTest(resultadosTest) { // resultadosTest = [ 1, 2, 4,5]--> promedio=?
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var notas = resultadosTest.reduce(function(acc, nota){
      return acc + nota;
   })
   return notas / resultadosTest.length; 
}
//El metodo reduce es como si fuese un bucle for implicito pero tambien lo vamos a hacer con for

// var notas = 0; 

// for (var i = 0; i < resultadosTest.length; i++) {
//    suma = suma + resultadosTest[i];
// }
// return suma / resultadosTest.length;

function numeroMasGrande(arrayOfNums) {  //arrayOfNums = [1, 3, 6, 9,11, 5]
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

//arrayOfNums = [1, 3, 6, 8, 9, 11, 5] --> 11 

   var mayor = arrayOfNums[0]; 

   arrayOfNums.forEach(function(numero) { // la diferencia entre for y foreach es que el el for le decimos hasta donde queremos que itere encambio el foreach va a interar mientras que alla numeros(elementos del arreglo)
   // HASTA QUE PUNTO LE DECIMOS QUE LO HAGA FOR: i < resultadosTest.length //// FOREACH ejecuta esta funcion para cada elemento que tenga el arreglo forEach(function(numero)
   // la diferencia es de sintaxis
   
      if (numero >= mayor) {
         mayor = numero; // si el elemento siguiente es mas alto o igual reasignamos la variable mayor 
      }
   })

   return mayor;

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
var producto = 1;

   if(arguments.length > 0) {
      for(var i = 0; i < arguments.length; i++) {
         producto = producto * arguments[i];
      }
   return producto; // por fuera del for ya que sino se cortaria a la primera vez

   } else {
      return 0;
   }

}

function cuentoElementos(array) { // array = [1, 2, 5, 33, 99]
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var total = 0;

array.forEach(function(numero) {
   if (numero > 18) {
    total ++ // total = total + 1 /// 
   }

})
return total; // la cantidad de numeros que son mayores que 18, cantidad de numeros que cumplen esa condicion no la sumatoria de los numeros
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana"
   } else {
      return "Es dia laboral"
   }

   //OTRA OPCIÓN:
   // if (numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 ||  numeroDeDia === 5 ||  numeroDeDia === 6 ) {
   //    return "Es dia laboral";
   // } else {
   //    return "Es fin de semana";
   // }

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código: //DEMOS CONVERTIR EL NUMERO  EN UN STRING UTILIZAMOS METODO TOSTRING()
 
   var string = num.toString(); 
   //me interesa saber que el primer elemento sea 9 para que sea true
   if(string[0] === "9") {
      return true; 
   } else {
      return false;
   }

}

function todosIguales(array) { 
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primervalor = array[0];

   for(var i = 1; i < array.length; i++) {
      if (array[i] !== primervalor) {
         return false;
      }
   }
   return true; 
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   //elemento no nos va a servir porque nos va a devolver un nuevo arreglo pero con base del original y necesitamos un nuevo arreglo con esos 3 meses 

var meses = [];

array.forEach(function(mes){
  if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
   meses.push(mes); // se estaria agregando al arreglo vacio antes definido 
  } 
})
if (meses.length === 3) {
   return meses;

} else {
   return "No se encontraron los meses pedidos";
}

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   //CON METODO MAP
   var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   var tabla = numeros.map(function(numero){ // va a tener la misma cantidad de elementos que eo original
      return numero * 6
   })

   return tabla;
}

//CON METODO FOR
// var tabla = []; 

// for(var i = 0; i <= 10; i++) {
//    tabla.push(i * 6);
// }
// return tabla; 


function mayorACien(array) { // array = [ 0, 10. 180 ....]
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   // NO SE PUEDE USAR EL METODO MAP POR QUE NO VAN A SER LA MISMA CANTIDAD DE ELEMENTOS QUE EL ARREGLO ORIGINAL
  
   var filtro = [];

   array.forEach(function(numero){
      if (numero > 100) {
         filtro.push(numero);
      }
   })
   return filtro; 
}
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
