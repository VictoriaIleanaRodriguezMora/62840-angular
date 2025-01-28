# Primera entrega de Proyecto final -  Angular


[Enlace a la presentacion](https://docs.google.com/presentation/d/1CiBlc3EzlbjEJRkhxUcj13tfxtDRBIlTLJTB19evs7Y/edit#slide=id.g209c4004a56_0_1029)

### Cómo levantar el proyecto:
```bash
git clone https://github.com/VictoriaIleanaRodriguezMora/62840-angular.git

git checkout preentrega_1

cd preentrega_1

npm i

ng serve
```

## Aspectos a incluir en el entregable

- [x] Proyecto Angular CLI con Angular.
- [x] Componentes de layout que incluya un navbar para el menú lateral y un toolbar para el título de la app.
- [x] Componentes: Lista de Alumnos y ABM de Alumnos.
- [x] Formularios Reactivos de ABM de alumnos.
- [x] Lógica y estructura de representación de datos en listado, utilizando tablas de Angular Material tomando sus datos de arrays y funciones typescript.
- [x] Pipe personalizado para mostrar el nombre junto al apellido de los alumnos
- [x] Directiva personalizada para que las cabeceras o títulos tengan letra tamaño 20.
- [x] Uso de la librería de bootstrap (instalada en el angular.json, no usar cdn)
- [x] Subir el código a repositorio de GitHub


### Recursos utilizados:
https://material.angular.io/components/sidenav/overview
https://material.angular.io/components/icon/overview
https://material.angular.io/components/button/overview
https://material.angular.io/components/form-field/overview
https://material.angular.io/components/input/overview

### Comandos aplicados:
```bash
ng add @angular/material

ng g module modules/dashboard
ng g component modules/dashboard --skip-tests --standalone=false

ng g module modules/dashboard/components/toolbar
ng g component modules/components/toolbar --skip-tests --standalone=false

ng g module modules/dashboard/pages/students
ng g component modules/dashboard/pages/students --skip-tests --standalone=false
ng g component modules/dashboard/pages/students/students-form --skip-tests --standalone=false
ng g component modules/dashboard/pages/students/students-table --skip-tests --standalone=false

ng g component modules/dashboard/components/toolbar --skip-tests --standalone=false

ng g module shared
ng g interface shared/interfaces/students 
ng g directive shared/directives/fontSize --skip-tests --standalone=false
ng g pipe shared/pipes/fullName --skip-tests --standalone=false


```