import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/models/students';
import { randomString } from '../../shared/randomString';

@Injectable({
    providedIn: 'root', // esto permite que pueda ser usado en cualquier parte de la app sin necesidad de importarse, porque va a estar en la raiz del proyecto
})
// para usar el servicio se usa el nombre de la clase
// Los servicios representan la capa de datos, manejan la comunicacion con la api
export class StudentsService {
    constructor() { }

    getStudentsPromise(): Promise<Student[]> {
        /* resolve donde la promesa se resuelve correctamente */
        /* promete que me va a devolver el listado de estudiantes, porque pueden pasar muchas cosas en el medio, que el internet se vaya, que el servidor esté caido, etc. entonces puede pasar cualquier cosa para que la promesa no se cumpla */
        return new Promise<Student[]>((resolve, reject) => {

            // reject("Promesa rechazada") // esto sale en el return 

            /* setTimeout(callback, milisegundos). Permite realizar acciones asincronicas */
            setTimeout(() => {
                resolve([
                    {
                        id: randomString(6),
                        name: "name",
                        lastName: "last name"
                    }
                ])
            }
                , 3000);
        });
    }
}

