import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from "./authentication.service";

import{ switchMap, catchError } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticationService = this.injector.get(AuthenticationService);

    return authenticationService.getToken().pipe(switchMap((token) => {
      if(token) {
        return next.handle(request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })).pipe(catchError((err: any) => {
          return this.catchError(err);
        }))
      } else {
        return next.handle(request).pipe(catchError((err) => {
          return this.catchError(err);
        }))
      }
    }))
  }

  private catchError(err: any): any {
    const authenticationService = this.injector.get(AuthenticationService);

    if(err instanceof HttpErrorResponse){
      if(err.status === 401) {
        this.authenticationService.logout();
      }
      return throwError(err);
    }
  }
}
