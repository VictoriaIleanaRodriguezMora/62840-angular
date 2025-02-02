import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './models/students';
import { randomString } from '../../../../shared/randomString';
import { StudentsService } from '../../../../core/services/StudentsService';
import { first, Subscription } from 'rxjs';
// import { StudentsService } from '../../../../services/students.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})

export class StudentsComponent implements OnInit, OnDestroy {
  studentForm: FormGroup;
  // vamos a reemplazar este array local por el que estoy simulando en assets
  // students: Student[] = [{
  //   "id": "M%%Tf8&S",
  //   "name": "name",
  //   "lastName": " last name"
  // }];
  // listado de las columnas que va a tener mi tabla
  students: any[] = [];
  selectedStudent: any;

  displayedColumns: string[] = ['id', 'name', 'lastName', 'action']

  // Si el id del estudiante que se está editando es null, significa que no estoy editando, si tiene valor, significa que estoy editando un estudiante 
  editingStudentId: string | null = null;

  isLoading: Boolean = false;
  promiseHasError: Boolean = false;

  studentsSubscription?: Subscription; // puede ser undefined porque al principio hasta que yo cree la suscripcion on va a estar definida. no está definida

  constructor(
    private fb: FormBuilder,
    // una nueva dependencia. importé MI servicio 
    // private myStudentService: StudentsService,
    private myStudentService: StudentsService, // C10 lo inyecta

  ) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    })
  }

  // este ciclo de vida se ejecuta cuando el componente se destruye (sale de la vista)
  ngOnDestroy(): void {
    this.studentsSubscription?.unsubscribe // Subscription | undefined
  }

  ngOnInit(): void { // este ciclo de vida se ejecuta despues del constructor, al inicializar el componente
    // me suscribo al metodo getStudents para que me traiga la lista de estudiantes , porque yo quiero que apenas cargue, me traiga la lista de estudiantes que está guardada en el Observer . ¿Cómo lo hago? Hay que suscribirse 
    // ahora me suscribo a la informacion que tiene guardada, para que retorne algo 

    // this.loadStudentsFromPromise()
    this.loadStudentsFromObs()

  }

  loadStudentsFromObs() {
    this.isLoading = true;
    // la defino acá:
    /* si quiero recibir los datos me tengo que suscribir al observable  */
    this.studentsSubscription = this.myStudentService
    .getStudentsObservable()
    // los pipes son una tuberia que hay entre los datos y la vista para transformar el contenido 
    // entre la info viaja del observable hacia el subscribe, se puede aplicar un pipe para manipular la info, o el flujo de emisiones 
    .pipe(
      first()
    )
    .subscribe({ // el metodo subscribe retorna una suscripcion 
      next: (studentsReceived) => {
        console.log("Recibo datos: ", studentsReceived); // esto se sigue jecutando aunque yo cambie de pantalla. infinitamente, y cada vez que cambio de ruta se hace más rapido. eso consume memoria en la pc del cliente. es un problema
        // esto va a seguir pasando hasta que el observer se complete,  o hasta que yo me desuscriba 
        // fugas de memoria 
        // un observebale que nunca se completa es un observable que nunca llama al complete 
        this.students = [...studentsReceived] // nuevo array con los estudiante recibidos
        this.isLoading = false;

      },
      error: (err) => {
        alert(err)
        this.isLoading = false; // por eso tengo que repetir logica acá
      },
      complete: () => {
        this.isLoading = false;
      },
    })
  }

  loadStudentsFromPromise() {
    /*     this.myStudentService.getStudents().subscribe((data) => {
      // data es la informacion que viene en getStudents, a la que yo me suscribo para recibir 
      return this.students = data;
    }) C09 */
    /* la funcion getStudentsPromise, devuelve una promesa. para atrapar el retorno de esa promesa uso .then .catch */
    this.isLoading = true;
    this.myStudentService.getStudentsPromise()

      // atrapar cuando se resuelve satisfactoriamente. atrapo el return resolve()
      .then((studentsReturned) => {
        this.students = studentsReturned;
      })
      // atrapar cuando no se resuelve satisfactoriamente. atrapo el return reject()
      .catch((e) => {
        this.promiseHasError = true;
        console.log("Promesa error: ", e); // Promesa error:  Promesa rechazada

      })
      // cuando la promesa termina, independientemente de resolve y reject
      .finally(() => {
        this.isLoading = false;
      })
  }


  // acá va la logica para editar/crear
  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
    } else {
      // console.log(this.studentForm.value);
      const { name, lastName } = this.studentForm.value
      const id = randomString(8)
      // const name = this.studentForm.value.name
      // const lastName = this.studentForm.value.lastName
      // const id = this.studentForm.value.id

      // Si esto es true, es decir si tiene valor, voy a editar, sino, debo crear
      if (this.editingStudentId != null) {
        // Editar
        this.students = this.students.map((estudiante) => {
          if (estudiante.id === this.editingStudentId) {
            // retorna lo que ya tiene (...estudiante) y (...this.studentForm.value) va a sobreescribir los campos que coincidan, con nuevos valores 
            return { ...estudiante, ...this.studentForm.value }
          } else {
            // sino, lo dejo como está
            return estudiante
          }
        })

        // reestablezco el id a null luego de ser editado, porque si no el estado va a quedar siempre editandose
        this.editingStudentId = null // reestablezco
      } else {
        // crear (ya lo tenia)
        // this.students.push({ id: randomString(8), name, lastName, }) // Esto no funciona en tiempo real
        this.students = [
          ...this.students,
          { id: randomString(8), name, lastName }
        ]
        // console.log(this.students);
      }
      this.studentForm.reset()
    }
  }

  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }

  getStudentDetails(id: string) {
    // entro al archivo de servicios, uso el metodo que quiero, le paso el id por parametro al Servicio, me suscribo a la informacion que tiene alojada el service.
    // Quiero que el 'student' que va a encontrar el getStudentsById, por medio del id que yo le envio, lo asigne a mi variable en el componente this.selectedStudent
    /*     this.myStudentService.getStudentsById(id).subscribe(student => {
          return this.selectedStudent = student;
        }) C09 */
  }

  onColorUpdated() {
    // console.log("Se actualizó el color del fondo del componente");
  }

  onEdit(student: Student) {
    // console.log("Se va a editar el estudiante: ", student);
    // editingStudentId va a ser igual al id que recibo cuando se hace click en el boton editar 
    this.editingStudentId = student.id

    // YO QUIERO QUE al tocar el boton editar, los campos del formulario se rellenen con lo que ya tienen. par ano escribir de cero
    // El form group tiene un metodo patchValue, permite sobreescribir el valor de los campos del formulario. Entonces yo toco en el lapiz, y en el campo nombre aparece por defecto lo que yo escribí en name: "texto"
    this.studentForm.patchValue({
      // name: "nombre editado" //esto es hardcodeado
      // ahora por defecto va a tener el valor que ya tiene el formulario
      name: student.name,
      lastName: student.lastName,
    })
  }

}
