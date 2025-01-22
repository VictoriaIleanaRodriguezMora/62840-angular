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

¿Qué es un observable?
Es como una promesa, tiene algo que ver
Ayuda a manejar las operaciones asincronas
Es un flujo de datos que podes observar
No es ni el dato que está guardado en la api ni es el dato que yo tengo, es el camino, es lo que nos va a estar devolviendo. Es lo que envía y reciba la informacion pero no es la informacion de un lado ni del otro.
Esto no es para comunicar de padres hijos, lo que hace es mas externo.
Cuando está disponible la información lo recibe, maneja los errores y podes saber con el Observable cuadno terminó un flujo de datos

Hay métodos comunes de rxjs que en la mayoria de apps se usan 3. El subscribe, filter, map

El subscribe es para poder llamarlo, para poder acceder a este metodo desde el componente que yo quiera. Yo me tengo que suscribir al metodo getStudents, entro al componente y e suscribo 
El suscribe Conecta el Observable con el consumidor 
Con el map puedo manipular la informacion, todo lo que va a emitir el observable antes de entregarselo al suscriptor. Formatear/filtrar
Filter permite filtrar los datos cuando se cumple una condición que yo le pida 

para pagar netflix, tengo que suscribirme, enviar datos, y pagar para poder consumir ese servicio 

getStudents va a ser de tipo observable, pero que es lo que va a devolver el observable ? 
yo tengo que armar el servicio, pero para armar el servicio hay pasos que seguir 

1 - nombre
2 - el tipo (observable)
3 - lo que devuelve va entre piquitos <>
  return this.http.get<any[]>()
() va de donde quiero que lo saque
 en este caso quiero que lo saque de la url 

00:18:00
