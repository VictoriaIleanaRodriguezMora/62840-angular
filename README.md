# Primera entrega de Proyecto final -  Angular


[Enlace a la presentacion](https://docs.google.com/presentation/d/1CiBlc3EzlbjEJRkhxUcj13tfxtDRBIlTLJTB19evs7Y/edit#slide=id.g209c4004a56_0_1029)

## Aspectos a incluir en el entregable

- [ ] Proyecto Angular CLI con Angular.
- [ ] Componentes de layout que incluya un navbar para el menú lateral y un toolbar para el título de la app.
- [ ] Componentes: Lista de Alumnos y ABM de Alumnos.
- [ ] Formularios Reactivos de ABM de alumnos.
- [ ] Lógica y estructura de representación de datos en listado, utilizando tablas de Angular Material tomando sus datos de arrays y funciones typescript.
- [ ] Pipe personalizado para mostrar el nombre junto al apellido de los alumnos
- [ ] Directiva personalizada para que las cabeceras o títulos tengan letra tamaño 20.
- [ ] Uso de la librería de bootstrap (instalada en el angular.json, no usar cdn)
- [ ] Subir el código a repositorio de GitHub

### Cómo levantar el proyecto:
```bash
git clone https://github.com/VictoriaIleanaRodriguezMora/62840-angular.git

git checkout primera_entrega

cd 1_entrega

npm i

ng serve
```
### Recursos utilizados:
https://material.angular.io/components/sidenav/overview

### Comandos aplicados:
```bash
ng g module modules/toolbar
ng g component modules/toolbar --skip-tests --standalone=false

ng g module modules/sidenav
ng g component modules/sidenav --skip-tests --standalone=false

ng g module modules/students
ng g component modules/students --standalone=false

ng g module pages/students
ng g component pages/students --skip-tests --standalone=false

ng g module shared
ng g interface shared/interfaces/students 
ng g directive shared/directives/fontSize --skip-tests --standalone=false
ng g pipe shared/pipes/fullName --skip-tests --standalone=false


```
