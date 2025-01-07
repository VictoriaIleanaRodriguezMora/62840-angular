npm i bootstrap

// Configurar bootstrap en angular.json

ng g c components/students-list

ng g c pages/student-page

// Dentro de la página de estudiante, muestro la student list, quiero mostrar el array de estudiantes de student-page.ts 

@Input decorador que le indica a Angular que ese componente va a recibir los datos de un componente Padre. Permite crear componentes reutilizables.

Quiero usar <app-students-list />, 2 veces distintas, para mostrar listas distintas. Una con los estudiantes aprbados y la otra con los desaprobados

WTF hay una extension para tener integrado drawio en VSCode

El decorador @Input se escribe en el componente hijo, porque es este el que recibe la lista que le envia el componente padre

app -> student page -> student list

La página de estudiantes renderiza las listas

