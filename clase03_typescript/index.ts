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

/* Tipar objetos */
// No es practico, si tiene muchas propiedades es incomodisimo
// Para no tener que hacer eso, existen las interfaces
const superheroe: { nombre: string, edad: number } = {
    nombre: "Cade Yager",
    edad: 40
}

/* Interfaces */
// Son un tipo de dato que yo puedo definir, para generar un contrato entre la interfaz y el objeto 
// Los tipos de datos personalizados empiezan con mayuscula
interface Superheroe {
    nombre: string,
    edad: number,
    superpoder?: string[]
}

const superheroe_1: Superheroe = {
    nombre: "Cinco",
    edad: 58,
    superpoder: ["Viajar en el tiempo", "teletransportarse en el espacio"]
}

/* Si tengo que definir muchos objetos del mismo tipo, es mejor usar una Clase  */


class Producto {
    precio: number;
    marca: string;
    id: number;
    // Si no asignara valores en la funcion, daria error porque no tienen asignado ningun valor. Al asignar el valor del constructor, le estoy asignando el valor que paso cuando instancio un objeto de la clase
    constructor(precio: number, marca: string, id: number) {
        this.precio = precio;
        this.marca = marca;
        this.id = id;
    }
}

const ps5 = new Producto(999, "Sony", 1)

class Carrito {
    productos: Producto[] = [];

    listarProductos(): void {
        console.log(this.productos);
    }

    agregarProductos(producto: Producto): void {
        this.productos.push(producto)
    }
}

class Ecommerce {
    productos: Producto[] = [ps5]
    carrito = new Carrito()
}

const app = new Ecommerce();
app.carrito.agregarProductos(ps5)

/* Angular está diseñado a partir de POO. Todos los componentes de un proyecto de Angular son Clases */
// Las Clases tienen modificadores de acceso. Es la definicion que le doy a Typescript sobre como quiero exponer esa propiedad. Publica o privada 

// Si no las defino de la forma corta, por defecto todas las propiedades son public
class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
    ) { }
}

class Persona2 {
    constructor(
        public nombre: string,
        private apellido: string,
    ) { }
}


/* Las clases y las interfaces puede trabajar en conjunto  */

interface Animal {
    cantidadPatas: number;
    tienePelo: boolean;
}

class Perro implements Animal {

}

