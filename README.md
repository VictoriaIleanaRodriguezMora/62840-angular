# Segunda entrega de Proyecto final - Angular

[Enlace a la presentacion](https://docs.google.com/presentation/d/1Sysx6eeGKL3HjecCNrbpx20S-j-2clyjIGXZjIL-pYY/edit#slide=id.g228a08608a5_0_426)

## ¿Cómo levantar el proyecto?
```bash
nvm use  22.13.0
cd preentrega_2
npm i
ng serve
```

### 📚Consigna
Generar un proyecto Angular que contemple la **administración** de `alumnos`, `clases` y `cursos`, utilizando Angular Material. Ten en cuenta los aspectos técnicos y aspectos funcionales claves para que tu proyecto cumpla con los objetivos. Puedes ayudarte con la Rúbrica de la Segunda Entrega del Proyecto Final.

### 💭 Objetivos generales
Optimizar tu proyecto frontend basado en Angular, integrando lo trabajado en clases hasta el momento y respetando los aspectos técnicos y funcionales esenciales.

### 🎯 Objetivos específicos
- [x] Añadir modulos especifícos.
- [x] Creación de servicios que devuelvan un observable con datos mockeados.
- [x] Uso de routing.
- [x] Uso de angular material.

### 🎯 Se debe entregar
- [x] Agregar servicios de las entidades que permitan el ABM de los mismos
- [x] Utilizar estos servicios en los componentes.
- [x] Modularizar la aplicación en app, core, shared y features modules.
- [x] Utilizar la navegación de rutas desde el menú lateral.




### Comandos aplicados:
```bash
ng g m modules/dashboard/pages/teachers

ng g m core

ng g c modules/dashboard/pages/courses --skip-tests --no-standalone

ng g c modules/dashboard/pages/courses/components/courses-table --skip-tests --no-standalone

ng g service core/courses --skip-tests

ng g c modules/dashboard/pages/courses/components/course-form-dialog --skip-tests --no-standalone
```
