/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

   // CLASE ES6
   class Usuario {
      constructor(usuario, nombre,email,password) {
         this.usuario = usuario;
         this.nombre = nombre;
         this.email = email;
         this.password = password;
         this.saludar = function () {
            return "Hola, mi nombre es " + this.nombre;
         }
      }

      // Tambien la funcion de saludar la podemos hacer por fuera del constructor 
      // saludar () {
      //    return "Hola, mi nombre es " + this.nombre;
   
   }
   return Usuario;
   
}

// Que cambia con el otro, es que class tiene el constructor

//CON FUNCION CONTRUCTORA es mas antigua
function Usuario(usuario, nombre, email, password) { // va a estar recibiento estos 4 propiedades
   this.usuario = usuario; 
   this.nombre = nombre;
   this.email = email;
   this.password = password;
   this.saludar = function () {
      return "'Hola, mi nombre es " + this.nombre; 
      // o return 'Hola, mi nombre es ${this.nombre};
   }
}
return Usuario;

// var usuario1 = new Usuario("user123", "Joaco", "hola@gmmail", "contraseña") // Ejemplo de lo que uno completaria 

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function() {
     return "Hello World!";
   }
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
  
   // queremos crear un metodo string que al escribir la palabra nos las devuelve al reves ej: "hola".reverse() --> "aloh"
   // existe el metodo reverse ya definido para los arrays y no para los String
   // pero hay un metodo que me permite crear un string en un arreglo el metodo SPLIT
   // Ej: 
   // var string = "hola".split(""); --> ["h", "o", "l", "a"]
   // var arrayReversed = string.reverse();
   //arrayReversed --> ["a", "l", "o", "h"] --> nos reversa el arreglo
   // y ahora con otro metodo llamado JOIN covertimos el arreglo en String
   // var resultado = arrayReversed.jon("") 
   // resultado --> "aloh"
   String.prototype.reverse = function(){
      return this.split("").reverse().join(""); //la clase string ya esta creada por JS
   }

// con el metodo FOR 
// String.prototype.reverse = function(){
//    var reversed = "";
//    for(var i = this.length - 1; i >= 0; i--) { // el this es cualquier string
//       reversed = reversed + this[i];
//       // "" = "" + "a"
//    }
//    return reversed; 
// }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
