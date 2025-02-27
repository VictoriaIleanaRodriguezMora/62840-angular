```bash
nvm use  22.13.0
cd clase17
npm i
ng serve
```
```bash
npx json-server courses_db.json --port 3001
npx json-server students_db.json --port 3000
```
Testing de httpClient
 
 ng test

```bash
 ng add @ngrx/schematics
```

 ![alt text](image.png)
 ```bash
 ng generate feature modules/dashboard/pages/users/store/user --skip-tests
```
 ```JS
// OUTPUT
CREATE src/app/modules/dashboard/pages/users/store/user.actions.ts 
CREATE src/app/modules/dashboard/pages/users/store/user.reducer.ts 
CREATE src/app/modules/dashboard/pages/users/store/user.selectors.ts                                                           
CREATE src/app/modules/dashboard/pages/users/store/user.effects.ts 
```

Para usar el feature store de los usuarios tengo que agregar: en
 ```bash
users.module.ts
```

```ts
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(userFeature)
  ]
```

```bash
ng g c modules/dashboard/pages/enrollments --skip-tests
```

```bash
ng g feature modules/dashboard/pages/enrollments/store/enrollment --skip-tests
```

Relacionar un estudiante a un curso, es el enrollment, la inscripcion





01:20:00