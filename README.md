```bash
nvm use  22.13.0
cd clase14
npm i
ng serve
```

¿Que es API? Conjunto de
¿REST?

Servicios Mock

Json server

```bash
npm i -g json-server
```

```bash
json-server db.json --watch
```

npx json-server db.json --port 3001
http://undefined:3001/courses
http://undefined:3001/courses?price_gt=1000 // greater than
Paginaciones
http://undefined:3001/courses?\_page=1&perpage_2 // 2 x pagina
Ordenar

```bash
ng generate environments
```

`CREATE src/environments/environment.ts (31 bytes)
CREATE src/environments/environment.development.ts (31 bytes)
UPDATE angular.json (3443 bytes)`
Genera un archivo para variables de entorno en DEV y PRD

Cuando se usa `ng serve` la configuracion que toma por defecto es la de desarrollo

```bash
angular.json
```

```json
 "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "b:build:production"
            },
            "development": {
              "buildTarget": "b:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
```
Con:
```bash
ng serve -c production
```
Con este comando va a leer las variables del archivo de produccion

Se elimina el contenido del comando budget porque no deja levantar la app.

Tengo que entrar con el usuario admin para poder crear un curso.

01:24:00
