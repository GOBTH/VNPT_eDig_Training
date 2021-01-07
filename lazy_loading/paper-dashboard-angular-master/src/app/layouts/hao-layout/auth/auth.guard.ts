import { Injectable } from '@angular/core';
import {  CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          UrlTree,
          Router,
          CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    return true;
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    return this.canActivate(route, state);
  }
  check(url: string){
    if(this.authService.isGoEdit){
      return true;
    }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/list');
  }
}
