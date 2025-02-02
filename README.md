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

00:50:00