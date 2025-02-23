# Tercera entrega de Proyecto final - Angular
 
[Enlace a la presentacion](https://docs.google.com/presentation/d/1OuhibK4qB-QOfUx4qVJt6MiEgBopOIIcKgg8YBV9cOE/edit#slide=id.g22c4018c097_1_586)
 
## ¿Cómo levantar el proyecto?
 
```bash
nvm i 22.13.0
nvm use  22.13.0
git clone https://github.com/VictoriaIleanaRodriguezMora/62840-angular.git
cd 62840-angular
cd preentrega_3
npm i
ng serve
```
 
## Cursos | En otra terminal:
 
```bash
nvm use  22.13.0
cd preentrega_3
npx json-server courses_db.json --port 3001
```

## Estudiantes | En otra terminal:
 
```bash
nvm use  22.13.0
cd preentrega_3
npx json-server students_db.json --port 3000
```
 
## Usuarios de prueba:
 
|            | Admin | Empleado |
| ---------- | ----- | -------- |
| Usuario    | a     | e        |
| Contraseña | 1     | 1        |
 
### 📚Consigna
 
Generar un proyecto Angular que contemple la administración de alumnos, clases y cursos, utilizando Angular Material. Ten en cuenta los aspectos técnicos y aspectos funcionales claves para que tu proyecto cumpla con los objetivos.
 
### 💭 Objetivos generales
 
Optimizar tu proyecto frontend basado en Angular, integrando lo trabajado en clases hasta el momento y respetando los aspectos técnicos y funcionales esenciales.
 
### 🎯 Objetivos específicos
 
- [x] Usar correctamente los métodos de la API.
- [x] Generar, al menos, un archivo de test que testee un servicio y otro que testee un componente.
- [x] Crear rutas para la aplicación.
- [x] Uso de angular material.
 
### 🎯 Se debe entregar
 
- [x] Lazy Loading y Rutas child.
- [x] Guards y Autenticación de usuarios.
- [x] API Rest.
- [x] Unit Testing: Test unitarios de componentes y servicios.

### A realizar
- [x] dividir en columnas las acciones
- [ ] manejar los errores de alguna manera. Redireccion pantalla de errores algo.
- [ ] boton de cancelar me deja pensando la pág
- [x] hacer que no entre al detalle si no hay nada que mostrar
- [x] mostrar en toolbar algo respecto al rol
- [x] Pop up, sweet alert para los mensaje en vez de alert