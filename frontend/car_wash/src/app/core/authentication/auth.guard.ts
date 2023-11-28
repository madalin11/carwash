import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isValidUser();
  }

  isValidUser() {
    return this.authenticationService.isAuthenticated().pipe(
      // @ts-ignore
      map((token) => {
        if (token) {
          return true;
        }
        this.authenticationService.logout().subscribe(() => {
          this.router.navigate(['auth', 'login']).then(() => {
            console.log('cv')
            return false;
          });
        });
      }));

  }
}
