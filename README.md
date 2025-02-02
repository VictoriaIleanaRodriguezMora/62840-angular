```
nvm use 22.13.0
cd clase10
npm i
ng serve
```

Para entender RXJS hay que entender la programación asincronica: Promesas
core/services

ng g service core/services/students --skip-tests

Las promesas sólo devuelven un valor (resolve o reject) , una unica vez. Sólo emiten valor una unica vez.
Los observables pueden emitir uno, ninguno o multiples valores

los observables reciben una referencia al subscriber. es una referencia a los oyentes o las entidades que estan suscritas a este observable.
cuando quiero recibir el valor que tengo dentro de un observable tengo que generar uns suscripcion+

si yo quisiera recibir novedades de una revista/tienda me tengo que suscribir. si yo quiero del observable enviarle actualizaciones a mis suscriptores, tengo que:

Con el método `next` envío una nueva notificacion. mySubscriber es el parametro, la referencia al subscriber
`mySubscriber.next()`

el observable al igual que las promesas puede tener diferentes resultados.
| Promesas | Observables | Recibe callback |
| -------- | ----------- | --------------- |
| .then    | .next        | ✅               |
| .catch   | .error        | ✅               |
| .finally | .complete   | ✅               |

los obsrvables pueden emitir mas de un valor, yo tengo que explicitamente definir cuando quiero que el observable se complete, cuando quiero notificar al suscriptor que el observable no va a emitir mas valores  }

si yo quiero que el observable se complete para poner el loading en false 

Pueden emitir multiples valores, tambien pueden pasar por pipes operators que permite controlar otransformar las emisiones del observable 

supongamos que el observable cada 5 minutos emite una actualizacion de los estudiantes 

a pesar de que ahora el observable finaliza cuando el contador llega a 10. si yo me voy a otra pantalla, sigue cargandolos estudiantes, sigue cargando datos que no estoy usando en esa pantalla 

la manera para hacerlo es usar el la suscripcion para desuscribirse

yo no puedo probar esto porqque no tengo lo de las rutas acá 

usar el metodo ngOnDestroy es una forma de trabajar con las desuscripciones, otra es con el pipe operator
permiten controlar el flujo con el cual nosotros emitimos datos desde el observable  

https://rxjs.dev/api

https://rxjs.dev/api/index/function/take

y si a pesar de que el observable emita 10 valores yo solo quiero recibir 1?
hay un pipe que se llama first

https://rxjs.dev/api/index/function/first

first lo que hace es: ni bien reciba una emision desde el observable se va a completar la suscripcion  
![alt text](image.png) grafico de canicas

la primera linea de tiempo, representa el observable
la 2da representa el pipe
y la ultima es lo que va a suceder con el pipe.

en este caso, se va a emitir un dato, y va a terminar ahi

