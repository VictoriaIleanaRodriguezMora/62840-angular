import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.authUser$.pipe(
    map((authUser) => {
      if (!authUser) {
        return router.createUrlTree(['auth', 'login'])
      }
      if (authUser.role === 'ADMIN') {
        return true
      } else {
        return router.createUrlTree(['dashboard', 'home'])
      }
    })
  )

};
