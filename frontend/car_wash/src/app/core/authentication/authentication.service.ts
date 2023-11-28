import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { concatMap, forkJoin, map, Observable, of, throwError } from "rxjs";
import { ApiService } from "../../shared/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private storagePrefix = 'carwash';
  jwtHelper: JwtHelperService | undefined;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
  }

  login(email: string, password: string): Observable<any> {
    return this.checkLogin(email, password).pipe(
      concatMap(response => {
        return this.getUserDetails();
      })
    )
  }

  register(firstName: string, lastName: string, email: string, password: string, phoneNumber: string): Observable<any> {
    return this.checkRegister(firstName, lastName, email, password, phoneNumber).pipe(
      concatMap(response => {
        return this.getUserDetails();
      })
    )
  }

  logout(): Observable<any> {
    return this.isAuthenticated().pipe(
      concatMap((authenticated) => {
        if (authenticated) {
          return this.api.save('carwash', '/logout').pipe(
            concatMap(response => {
              this.router.navigate(['main'], { relativeTo: this.route});
              return this.removeToken();
            })
          )
        } else {
          this.router.navigate(['main'], { relativeTo: this.route});
          return this.removeToken();
        }
      })
    )
  }

  public isAuthenticated(): any {
    return this.getToken();
  }


  checkLogin(email: string, password: string): Observable<any> {
    const credentials = { email, password };

    return this.api.save('carwash', '/login', credentials).pipe(
      map((response: any) => {
        const token = response && response.token;
        if (token) {
          this.setToken(token);
          return true;
        } else {
          return false;
        }
      })
    )
  }

  private checkRegister(firstName: string, lastName: string, email: string, password: string, phoneNumber: string) {
    const params = { firstName, lastName, email, password, phoneNumber };
    return this.api.save('carwash', '/register', params).pipe(
      map((response: any) => {
        const token = response && response.token;
        if (token) {
          this.setToken(token);
          return true;
        } else {
          return false;
        }
      })
    )
  }

  getUserDetails(): Observable<{ user: IUser }> {
    const self = this;

    return this.isAuthenticated().pipe(
      concatMap((authenticated) => {
        if (!authenticated) {
          return throwError('Unauthorized');
        }

        return forkJoin({
          user: this.getCurrentUser()
        })
      })
    )
  }

  setToken(token: string) {
    return of(localStorage.setItem(`${this.storagePrefix}token`, token));
  }

  getToken(): any {
    const token = localStorage.getItem(`${this.storagePrefix + 'token'}`);
    return this.isTokenValid(token).pipe(map((valid) => {
      if (valid) {
        return token;
      } else {
        return false;
      }
    }))
  }

  private isTokenValid(token: any): any {
    if (!token) {
      return of(false);
    }

    this.jwtHelper = new JwtHelperService();
    if (this.jwtHelper.isTokenExpired(token)) {
      return of(false);
    }
    return of(true);
  }

  private getCurrentUser(): Observable<IUser> {
    return this.api.getSingle('carwash', '/me').pipe(
      map((user: IUser) => {
        return user;
      })
    )
  }

  public removeToken() {
    return of(localStorage.removeItem(this.storagePrefix + 'token'));
  }
}
