# Clase02ComponentesYElementosDeUnProyecto

### Crear el proyecto

```bash
ng new clase_02_componentesYElementosDeUnProyecto --no-standalone
```

---

### Entrar al directorio del proyecto

```bash
cd clase_02_componentesYElementosDeUnProyecto
```

---

### Levantar el proyecto

- Levanta en el puerto 4200 [http://localhost:4200/](http://localhost:4200/)

| Comando: | `ng serve` | o   | `npm start` |
| -------- | ---------- | --- | ----------- |

// ng serve -o ---> No me funciona, se corta la consola automaticamente

En Angular el lenguaje de programacion es `Typescript`

Lo que tiene un @ delante son Decoradores.

### Generar un componente

```bash
ng generate component header

CREATE src/app/header/header.component.html (22 bytes)
CREATE src/app/header/header.component.spec.ts (624 bytes)
CREATE src/app/header/header.component.ts (210 bytes)
UPDATE src/app/app.module.ts (475 bytes)
```

Estoy trabajando con Angular basado en Módulos. Entonces cuando yo creo un componente, mete ese componente en el módulo mas proximo que le encuentre. Por defecto va a ir al app.module.ts

### Generar un componente - (Forma abreviada)

```bash
ng g c nameComponent
```

### Flags para generar un componente

| Flag              | Qué hace                                                                              |
| ----------------- | ------------------------------------------------------------------------------------- |
| --inline-template | No genera el archivo .html, genera una propiedad 'template' en el .ts del componente. |
| --skip-tests      | No genera el archivo .spec.ts                                                         |
| --inline-style    | No genera el archivo .scss, genera una propiedad 'styles' en el .ts del componente.   |


> ⚠️ **Importante:** ⚠️
>
> Tuve que agregarle: `standalone: false,` a los componentes para que no de error.

### Invocar un componente

- Un componente se invoca por el selector que tiene en su archivo .ts en el archivo .html que lo quiero usar

```html
<app-header></app-header>
```

> ⚠️ **Importante:** ⚠️
>
> Para que un componente pueda visualizarse, tiene que ser parte de un módulo. Actualmente toda la aplicación está contenida en el modulo app.module.ts

