/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: nombre,
      edad: edad,
      meow: function(){
         return "Meow!"
      }
   }
   return gato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {
      nombre: nombre,
      email: email,
      password: password
   }
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   
   // dot notation no nos sirve cuando estamos tratando de almacenar una variable, toma el nombre de la variable como informacion 
   // bracket notation 

   objeto[propiedad] = null;
   // no debemos ponerlo entre "" porque seria literalmente propiedad utilizarlo cuando se que valor va a recibir, en cabmio sin "" seria una variable
  // NO utilizamos "" cuando la notacion es una variable 
   return objeto;
}
// si le paso objeto["propiedad"] = null  --> va a estar tomando como literal el nombre de la propiedad

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
objeto[metodo]();   // --> objeto = {metodo: funcion()}
//acedemos al valor de una propiedas que es una funcion le ponemos los () para activar la función
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   //PUEDO UTILIZAR NOTACION POR PUNTO PORQUE ME INDICA PORQUE POSEE UNA PROPIEDAD CON EL NOMBRE YA DEFINIDO "numeroMisterioso" no es una variable, es algo ya definido 
   return objetoMisterioso.numeroMisterioso * 5;
}

//OTRA OPCION: 
// var resultado = objetoMisterioso.numeroMisterioso * 5; 
// return resultado;

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email) { //si tiene algo en la propiedad de email nos va a dar true
      return true;
   } else {
      return false; // Si no tiene nada o no existe la propiedad email nos va a dar false
   }
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   // utilizamos el nos va a indicar si un objeto tiene esa propiedad nos va a devolver true o false 
if(objeto.hasOwnProperty(propiedad)) { // propiedad es una variable 
   return true;
}  else {
   return false;
}
}

//busca si la propiedad esta dentro del objeto
//OTRA MANERA DE RESOLVERLO:

// return objeto.hasOwnProperty(propiedad); // si es true nos devuelve true si es false nos devuelve false


function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password === password) {
      return true;
   } else {
      return false;
   }
}

//OTRA OPCION: 
// return objetoUsuario.password === password; 


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword; //un unico = que estamos reasignando un valor
   return objetoUsuario;
}


function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
  
//objetoUsuario = { amigos:["alejo", "pepe", "Eze"] } tenemos un objeto que tiene una propiedad llamada amigos y que su valor es un arreglo

// el objeto no tiene los metodos push, pop, map etc que tienen los arreglos, pero como en este caso hay una propiedad que es un arreglo se lo podemos aplicar.
objetoUsuario.amigos.push(nuevoAmigo);
return objetoUsuario;

}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

   // objetoMuchosUsuarios = [{    esPremium: TRUE }, {        },{        },{        }] un arreglo de objetos y cada objeto se llama usuario
//                             usuario1                usuario2   usuario3   usuario4

// cadaa uno de los objetos usuarios tiene un apropiedad llamada esPremium y que tienen un valro ? y debemos cambiara a TRUE 

// entonces recoremos cada uno de los objetos dentro del arreglo meternos en la propiedad esPrimium y le cambiamos el valor a true


//SOLUCION forEach
objetoMuchosUsuarios.forEach(function(usuarios) {
   usuarios.esPremium = true;
})

return objetoMuchosUsuarios;

}

//Solución for
// function pasarUsuarioAPremium(objetoMuchosUsuarios) {
//    for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
//       objetoMuchosUsuarios[i].esPremium = true;
//    }

//    return objetoMuchosUsuarios;
// }

// Solucion For in
// for (var i in objetoMuchosUsuarios) {
//    objetoMuchosUsuarios[i].esPremium = true;
// }
// return objetoMuchosUsuarios;



function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:

   // objetoUsuario = {posts: [{ likes: num }, { likes: num    }, { likes: num   }] }
  //                            post1              post2               post3
   
//es un objeto que tiene una propiedad llamada posts que tiene un arreglo que a su vez es un arreglo de objetos
// y cada uno de esos objetos post tienen una propiedad llamada liks
// lo que queremos hacer es reccorer cada uno de los objetos y contar los liks que tiene cada post


//for each
var totalLiks = 0;

objetoUsuario.posts.forEach(function(post){
   totalLiks = totalLiks + post.likes
})

return totalLiks;
}

//CON FOR 
// var totallikes = 0;

// for (var i = 0; i < objetoUsuario.posts.length; i++) {
//    totallikes = totallikes + objetoMuchosUsuarios.post[i].likes
// }
// return totallikes;

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:

   // objetoProducto = { precio: 10, porcentajeDeDescuento: 0.2, calcularPrecioDescuento: function()}
      // el objeto tiene una propiedad llamada precio y otra descuento y debemos crear una nueva propiedad que sea una funcion y que calcule

   objetoProducto.calcularPrecioDescuento = function(){
   return this.precio - (this.precio * this.porcentajeDeDescuento);
      
      //return 10 - (10 * 0.2) --> 8
   }

   return objetoProducto;

}








/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
