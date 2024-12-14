import { CanActivateFn, Router } from '@angular/router';

export const userGuardGuard: CanActivateFn = (route, state) => {
    let typeUser=localStorage.getItem('typeUserId');
    let router :Router = new Router();
    if (typeUser != '2') {
      router.navigate(['admin']);
      return false
    }
    return true;
};
