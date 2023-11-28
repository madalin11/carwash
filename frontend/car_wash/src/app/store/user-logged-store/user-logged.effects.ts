import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RequestActionTypes } from "./types";
import { catchError, switchMap, map } from "rxjs/operators";
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import {
  CurrentUserFailureAction,
  CurrentUserRequestAction,
  CurrentUserSuccessAction,
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutFailureAction,
  LogoutRequestAction,
  LogoutSuccessAction, RegisterFailureAction,
  RegisterRequestAction,
  RegisterSuccessAction
} from "./actions/user-logged.actions";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class UserLoggedEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(RequestActionTypes.LOGIN_REQUEST),
    switchMap((action: LoginRequestAction) => {
      return this.authenticationService.login(action.payload.email, action.payload.password).pipe(
        map(response => new LoginSuccessAction({ userLogged: { ...response.user } })),
        catchError(error => of(new LoginFailureAction({ error: error.error.errors[0].message }))));
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(RequestActionTypes.LOGOUT_REQUEST),
    switchMap((action: LogoutRequestAction) => {
      return this.authenticationService.logout().pipe(
        map(response => new LogoutSuccessAction()),
        catchError(error => of(new LogoutFailureAction({error: error.error.errors[0].message })))
      )
    })
  ))

  currentUser$ = createEffect(() => this.actions$.pipe(
    ofType(RequestActionTypes.CURRENT_USER_REQUEST),
    switchMap((action: CurrentUserRequestAction) => {
      return this.authenticationService.getUserDetails().pipe(
        map(response => new CurrentUserSuccessAction({ currentUser: { ...response.user } })),
        catchError(error => of(new CurrentUserFailureAction({ error: error.error.errors[0].message })))
      );
    })
  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(RequestActionTypes.REGISTER_REQUEST),
    switchMap((action: RegisterRequestAction) => {
      return this.authenticationService.register(
        action.payload.firstName,
        action.payload.lastName,
        action.payload.email,
        action.payload.password,
        action.payload.phoneNumber
      ).pipe(
        map(response => new RegisterSuccessAction({ userLogged: { ...response.user } })),
        catchError(error => of(new RegisterFailureAction({ error: error.error.errors[0].message }))));
    })
  ))

}
