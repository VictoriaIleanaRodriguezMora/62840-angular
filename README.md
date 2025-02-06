```bash
nvm use 22.13.0
cd clase09
npm i
ng serve
```

Servicios y RxJS en el dia a dia se usan juntos
Servicios es nativo de Angular y RxJS es una libreria que usa Angular

### ¿Qué son los servicios?

Con un servicio se mantiene encapsulada una lógica para compartirla en toda la aplicación.
Ej: Si necesito info de la lista de estudiantes que necesito en varios lugares de mi app, esos métodos que me traen la info deben estar en un lugar que sean accesibles desde toda mi aplicacion
Guardan logica reutilizable, pero tiene un par de cosas complejas

- Ventajas: Tengo la logica y datos centralizados. No solo la logica, sino la logica y los datos que llama. Y es reutilizable. Mediante la inyeccion de dependencias llamo a este servicio, que inyecto en el constructor del componente

<hr/>

El archivo `clase09\src\app\assets\students.json`:

Configuracion en `angular.json`

```json
{
  "glob": "**/*",
  "input": "src/app/assets",
  "output": "assets"
}
```

- Esto es para que esté disponible la ruta de los assets cuando lo llamemos dentro de los servicios. Es una configuracion que deberia ser automatica

```bash
ng g service services/students --skip-tests
```

```ts
// Esta inyeccion lo que hace, es permitir que se pueda usar en toda la app
@Injectable({
  providedIn: "root",
})
export class StudentsService {
  private studentUrl = "assets/students.json"; // ruta privada donde tengo la data. Algún dia va a ser de una API

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    // esto podría no ser de tipo Observable, y obtendriamos la info igual. pero no es cómo se trabaja en angular
  }
}
```

En el componente hay que generar los métodos, para realizar las solicitudes. `GET, POST, PUT, DELETE`

### ¿Qué es un observable?

- Es como una promesa, tiene algo que ver
- Ayuda a manejar las operaciones asincronas
- Es un flujo de datos que podes observar
- No es ni el dato que está guardado en la api ni es el dato que yo tengo, es el camino, es lo que nos va a estar devolviendo. Es lo que envía y reciba la informacion pero no es la informacion de un lado ni del otro.
- Esto no es para comunicar de padres hijos, lo que hace es mas externo.
- Cuando está disponible la información lo recibe, maneja los errores y podes saber con el Observable cuadno terminó un flujo de datos

### Para poder acceder al método getStudents()

1. Tengo que acceder a la Clase del Servicio: `StudentsService`
2. Acceder al método que quiero: `getStudents`
3. Suscribirme la observable

### ¡Un servicio puede devolver muchos métodos!

### Hay `métodos` comunes de rxjs que en la mayoria de apps se usan 3. El `subscribe, filter, map`

- El `subscribe` es para poder llamarlo, para poder acceder a este metodo desde el componente que yo quiera. Yo me tengo que suscribir al metodo getStudents, entro al componente y e suscribo
  El `subscribe` Conecta el Observable con el consumidor.

- Con el `map` puedo manipular la informacion, todo lo que va a emitir el observable antes de entregarselo al suscriptor (componente donde lo voy a usar). Formatear/filtrar

- Filter permite filtrar los datos cuando se cumple una condición que yo le pida.

"_para pagar netflix, tengo que suscribirme, enviar datos, y pagar para poder consumir ese servicio_"

`getStudents` va a ser de tipo `_observable_`,
¿Pero que es lo que va a devolver el observable ?
yo tengo que armar el servicio, pero para armar el servicio hay pasos que seguir

1. nombre
2. el tipo (observable)
3. el tipo de lo que devuelve el observable va entre piquitos <>
4. Cómo es un método, tiene que retornar algo.

```ts
// Esta inyeccion lo que hace, es permitir que se pueda usar en toda la app
@Injectable({
  providedIn: "root",
})
export class StudentsService {
  private studentUrl = "assets/students.json"; // ruta privada donde tengo la data. Algún dia va a ser de una API

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    // esto podría no ser de tipo Observable, y obtendriamos la info igual. pero no es cómo se trabaja en angular
    return this.http.get<any[]>(this.studentUrl); // entre <> va el tipo que va a devolver, y entre () va de donde quiero que saque la info
  }

  // Este es el 2do método del Servicio
  getStudentsById(myId: string): Observable<any> {
    return this.http
      .get<any[]>(this.studentUrl) // hago un GET de toda la info del archivo, para despues filtrarla
      .pipe(
        // el método es RXJS
        map((students) => students.find((studMap) => studMap.id === myId)) // este map es de RXJS
      );
  }
  /* map((students) => {
     return students.find((student) => { return student.id === myId })
    })
  */
}
```

```bash
 clase09\src\app\modules\dashboard\pages\students\students.component.ts
```

```ts
import { StudentsService } from "../../../../services/students.service"; // importé MI servicio

export class StudentsComponent implements OnInit {
  // El implements OnInit lo poneen esta clase
  students: any[] = []; // Nuevo
  selectedStudent: any;

  constructor(
    private fb: FormBuilder,
    private myStudentService: StudentsService // Agrego una nueva dependencia. importé MI servicio.
  );

  ngOnInit(): void {
    // Me suscribo al metodo getStudents para que me traiga la lista de estudiantes.
    // Porque yo quiero que apenas cargue la página, me traiga la lista de estudiantes que está guardada en el Observable.
    // ¿Cómo lo hago? Hay que suscribirse

    // ahora me suscribo a la informacion que tiene guardada, para que retorne algo
    this.myStudentService // 1° llamo a mi servicio
      .getStudents() // 2° indico el método que quiero usar de mi servicio
      .subscribe((data) => {
        // 3° me suscribo, y hago algo con la informacion que me devuelve
        // data es la informacion que viene en getStudents, a la que yo me suscribo para recibir
        return (this.students = data); // ¡data, es el RETURN de getStudents! y se lo estoy asignando a mi variable this.students que es la que uso para mostrar en la Vista
      });
  }

  getStudentDetails(id: string) {
    this.myStudentService // 1° llamo al servicio
      .getStudentsById(id) // 2° llamo al método del servicio que necesito, le paso el parametro, que es el parametro del método que lo envuelve (getStudentDetails)
      .subscribe((student) => {
        // 3° me suscribo para recibir una respuesta
        return (this.selectedStudent = student); // student, es la respuesta del suscribe, que retorna un unico elemento, el que coincide con el id. this.selectedStudent la definí acá en el componente
      });
  }
}
```

**El tema de http, HTTPCLIENT, es una libreria, no tiene que ver con Angular. El profe de Back la usó**


00:58:00
