console.log("Hola mundo from TS");

// Si yo defino un tipo de dato, toma el tipo de dato por implicito
let edad = 30; // number
let nombre = "Leandro"; // number
let active = false; // boolean
let calificacion = null; // null
let curso

// Tipo de dato explícito. De esta manera, la variable nunca va a poder tomar otro tipo de dato cómo valor
let cantidadAlumnos: number = 90
let nombreProfesor: string = "Leandro R"
let aprobado: boolean = true
let a: null = null;
let b: true = true;

// Array de strings
let frutas: string[] = ["Manzana", "Pera", "Frutilla"]
// El tipo de dato es numer o string, estos son parte de un arreglo[]
// Los (), indican que NO hay un orden para los tipos de dato, pueden ir en cualquier orden.
let nrosYLetras: (number | string)[] = [1, 2, 3, "L"]
// let nrosYLetras: (number | string)[] = [1, 2, 3, "L", true] // Esto da error, porque booleano no está definido en el tipo
// Los [], indican el orden en que deben ir los componentes del arreglo. 
// Se lo conoce como 'Tupla'
let nombreEdad: [string, number] = ["L", 20]
// let nombreEdad: [string, number] = [20, "L"] // Esto da error porque primero debe ir el tipo string

/* Array<tipo de dato> = [] */
let calificaciones: Array<number> = [2, 5]


// No es una buena practica usar any, porque eso seria como usar vanilla js
let cualquierCosa: any = 30

/* Los tipos de dato personalizado se escriben con la primera letra mayúscula */
// Enumeraciones. No existen en JS
enum Volumen {
    Alto = 100,
    Medio = 50,
    Bajo = 25
}

let volumenMax: Volumen = Volumen.Alto;

function saludar(nombre: string) {
    console.log(nombre);
}
// Cuando voy a ejecutar la función me dice de que tipo tiene que ser el parametro que le voy a pasar
saludar("Lean")

/* Si pongo un signo ? detras de la propiedad, esa se vuelve OPCIONAL */
function saludar2(nombre?: string) {
    console.log(nombre);
}
saludar2() // No estoy obligada a pasarle un parametro
saludar2("Agus")

/*  Definir un tipo de retorno de la funcion */
// Si la funcion no tiene un return, cómo arriba en la funcion saludar, el tipo de retorno IMPLICITO es :void
function sumar(a: number, b: number): number {
    return a + b
}
sumar(5, 5);


/* Funcion flecha */

const restar: (a: number, b: number) => number = (a: number, b: number) => {
    return a - b
}