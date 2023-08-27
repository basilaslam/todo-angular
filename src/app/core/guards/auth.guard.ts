import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router : Router = inject(Router)
    const login = localStorage.getItem('accessToken')
    if(!login){
      router.navigate(["/auth/login"])
    }

    return true
};
