nvm use 22.13.0
cd clase09
npm i
ng serve

Servicios y RxJS en el dia a dia se usan juntos 
Servicios es nativo de Angular y RxJS es una libreria que usa Angular

¿Qué son los servicios?
Con un servicio se mantiene encapsulada una lógica para compartirla en toda la aplicación.
Ej: Si necesito info de la lista de estudiantes que necesito en varios lugares de mi app, esos métodos que me traen la info deben estar en un lugar que sean accesibles desde toda mi aplicacion 
Guardan logica reutilizable, pero tiene un par de cosas complejas 

Ventajas: Tengo la logica y datos centralizados. No solo la logica, sino la logica y los datos que llama. Y es reutilizable. Mediante la inyeccion de dependencias llamo a este servicio, que inyecto en el constructor del componente 

Esto es para que esté disponible la ruta de los assets cuando lo llamemos dentro de los servicios. Es una configuracion que deberia ser automatica

```bash
ng g service services/students --skip-tests 
```

00:18:00