import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Se disparó el guard");

  const router = inject(Router)
  const authService = inject(AuthService)
  // createUrlTree es para decirle a angular que sobreescriba el arbol de navegacion actual de la ruta y lo crea a partir de una nueva especificacion que yo le de.
  /* return router.createUrlTree(["auth", "login"]); // el primer valor es el modulo del que va a sacar la raiz, y el 2do valor es la ruta  que pertenece a ese modulo. generará la URL "/auth/login"
  esto está hardcodeado. no le está dejando pasar al usuario, yo deberia consultar al auth service si la autenticacion fue correcta o no 
  */
  return authService.isAuthenticated().pipe(
    map((isAuthenticated) => {
      console.log("¿Está autenticado?", isAuthenticated);
  
      if (!isAuthenticated) {
        return router.createUrlTree(["auth", "login"]);
      }
  
      authService.authUser$.subscribe(user => {
        console.log("Usuario autenticado en Guard:", user);
      });
  
      return true;
    })
  );
  



};
