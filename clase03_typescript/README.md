# Presentación: [Clase 03](https://docs.google.com/presentation/d/16R_jcvJ5lpF_CE5Txg9zCaLK2uYd0sc9ltD5jHauVo8/edit#slide=id.g11a0b21555d_2_457)

Node.js

Es considerada una tecnología de servidor que hace aportes a un proyecto javascript aunque sea con tecnología Front-End.

No se utiliza Node.js para desarrollar un proyecto de Angular, pero sí se utiliza una herramienta que viene con su instalación: npm

Un proyecto ANGULAR finalizado no se encuentra limitado a la plataforma de node para funcionar, sino que puede hacerlo con cualquier servidor web que soporte html, css y javascript.

Cuando trabajo en el front, sólo puedo ejecutar JavaScript directamente en la consola del navegador o enlazando un archivo .js a un .html


## Typescript

No se puede ejecutar en el navegador TypeScript.
Typescript es traducido/transpilado a JavaScript para que el navegador lo entienda
TypeScript detecta errores antes de ejecutar el proyecto, los marca en el editor de código, y asi se corrigen errores antes de ejecutarlo.

Es común encontrar typescript en el front, pero tambien en el backend.

```bash
npm i typescript
touch index.ts
npx tsc index.ts
```

| Comando        | Qué hace                      |
| -------------- | ----------------------------- |
| `npx tsc --init` | Crea el archivo tsconfig.json |

**`"outDir": "./dist"`**, ---> Configura un directorio de salida para todos los archivos emitidos

Para que los archivos se generen en esa carpeta, tengo que usarlo en modo observador: 

```bash
npx tsc --watch
```

## Caracteristicas de Typescript


