import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Se disparó el guard");

  const router = inject(Router)

  // createUrlTree es para decirle a angular que sobreescriba el arbol de navegacion actual de la ruta y lo crea a partir de una nueva especificacion que yo le de.
  return router.createUrlTree(["auth", "login"]); // el primer valor es el modulo del que va a sacar la raiz, y el 2do valor es la ruta  que pertenece a ese modulo. generará la URL "/auth/login"
  



};
