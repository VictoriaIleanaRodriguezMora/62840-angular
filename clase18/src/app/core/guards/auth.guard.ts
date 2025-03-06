import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, combineLatest, filter, map, of, switchMap, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated().pipe(
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
        return of(router.createUrlTree(["auth", "login"]));
      }

      return combineLatest([
        of(isAuthenticated),
        authService.authUser$.pipe(
          filter(user => !!user),
          take(1)
        )
      ]).pipe(
        map(([isAuth, user]) => {
          const storedToken = localStorage.getItem('access_token');

          if (user?.accessToken !== storedToken) {
            authService.logout();
            return router.createUrlTree(["auth", "login"]);
          }

          return true;
        })
      );
    }),
    catchError(() => {
      authService.logout();
      return of(router.createUrlTree(["auth", "login"]));
    })
  );
};