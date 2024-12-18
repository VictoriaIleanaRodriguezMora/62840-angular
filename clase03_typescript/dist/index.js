"use strict";
console.log("Hola mundo from TS");
// Si yo defino un tipo de dato, toma el tipo de dato por implicito
let edad = 30; // number
let nombre = "Leandro"; // number
let active = false; // boolean
let calificacion = null; // null
let curso;
// Tipo de dato explícito. De esta manera, la variable nunca va a poder tomar otro tipo de dato cómo valor
let cantidadAlumnos = 90;
let nombreProfesor = "Leandro R";
let aprobado = true;
let a = null;
let b = true;
// Array de strings
let frutas = ["Manzana", "Pera", "Frutilla"];
// El tipo de dato es numer o string, estos son parte de un arreglo[]
// Los (), indican que NO hay un orden para los tipos de dato, pueden ir en cualquier orden.
let nrosYLetras = [1, 2, 3, "L"];
// let nrosYLetras: (number | string)[] = [1, 2, 3, "L", true] // Esto da error, porque booleano no está definido en el tipo
// Los [], indican el orden en que deben ir los componentes del arreglo. 
// Se lo conoce como 'Tupla'
let nombreEdad = ["L", 20];
// let nombreEdad: [string, number] = [20, "L"] // Esto da error porque primero debe ir el tipo string
// No es una buena practica usar any, porque eso seria como usar vanilla js
let cualquierCosa = 30;
/* Los tipos de dato personalizado se escriben con la primera letra mayúscula */
// Enumeraciones. No existen en JS
var Volumen;
(function (Volumen) {
    Volumen[Volumen["Alto"] = 100] = "Alto";
    Volumen[Volumen["Medio"] = 50] = "Medio";
    Volumen[Volumen["Bajo"] = 25] = "Bajo";
})(Volumen || (Volumen = {}));
let volumenMax = Volumen.Alto;
function saludar(nombre) {
    console.log(nombre);
}
// Cuando voy a ejecutar la función me dice de que tipo tiene que ser el parametro que le voy a pasar
saludar("Lean");
