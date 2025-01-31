import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root' // esto permite que pueda ser usado en cualquier parte de la app sin necesidad de importarse, porque va a estar en la raiz del proyecto 
})
// para usar el servicio se usa el nombre de la clase
// Los servicios representan la capa de datos, manejan la comunicacion con la api 
export class StudentsService {

    constructor() { }

    getStudentsPromise(): Promise<Student[]> {
        return new Promise((resolve, reject) => {
        });
    }
}
