import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  let typeUser=localStorage.getItem('typeUserId');
  let router :Router = new Router();
  if (typeUser != '1') {
    router.navigate(['']);
    return false
  }
  return true;
};
