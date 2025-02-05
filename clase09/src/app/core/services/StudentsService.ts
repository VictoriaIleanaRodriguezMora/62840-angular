import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/models/students';
import { randomString } from '../../shared/randomString';
import { delay, interval, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root', // esto permite que pueda ser usado en cualquier parte de la app sin necesidad de importarse, porque va a estar en la raiz del proyecto
})
// para usar el servicio se usa el nombre de la clase
// Los servicios representan la capa de datos, manejan la comunicacion con la api
export class StudentsService {
    constructor() { }

    getStudentsObservable(): Observable<Student[]> {
        return new Observable<Student[]>((mySubscriber) => { //los observables reciben una referencia al subscriber (mySusbcriber)

            const students = [{
                id: randomString(6),
                name: "name",
                lastName: "last name"
            }]

            setInterval(() => {
                //emito los estudiantes
                students.push({
                    id: randomString(6),
                    name: "name",
                    lastName: "last name " + students.length
                })
                mySubscriber.next(students)
                // mySubscriber.error("error desde observable ") // cuando hay un error, no llega al complete, se sale del bloque
                /* #1 forma de solucionar esto, seria: */
                if (students.length === 10) {

                    mySubscriber.complete() // notifica al subscriptor/es que ya no va a emitir mas datos este obs
                }
            }, 5000);

        })
    }

    getStudentsPromise(): Promise<Student[]> {
        // resolve donde la promesa se resuelve correctamente
        // promete que me va a devolver el listado de estudiantes, porque pueden pasar muchas cosas en el medio, que el internet se vaya, que el servidor esté caido, etc. entonces puede pasar cualquier cosa para que la promesa no se cumpla
        return new Promise<Student[]>((resolve, reject) => {

            // reject("Promesa rechazada") // esto sale en el return 

            // setTimeout(callback, milisegundos). Permite realizar acciones asincronicas
            setTimeout(() => {
                resolve([
                    {
                        id: randomString(6),
                        name: "name",
                        lastName: "last name"
                    }
                ])
            }, 3000);
        });
    }

    // rxjs tiene una forma mas facil para crear observables que no sea con  return new Observable
    getInterval(): Observable<number> {
        return interval(1000) // retorna: Observable<number>
    }

    getRoles(): Observable<string[]> {
        //la funcion of convierte a observable cualquier valor que yo le pase en los (), inmediatamente emite el valor se completa. es una forma corta de emitir oibservables 
        return of([
            'admin',
            'student',
            'seller'
        ])
        .pipe(delay(1000))
    }

    getFrutas(): Observable<string[]> {
        //la funcion of convierte a observable cualquier valor que yo le pase en los (), inmediatamente emite el valor se completa. es una forma corta de emitir oibservables 
        return of([
            'Banana 🍌',
            'Manzana 🍏',
            'Pera 🍐'
        ])
        .pipe(delay(3000))
    }

}

