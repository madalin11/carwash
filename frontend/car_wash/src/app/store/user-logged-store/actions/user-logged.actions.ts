import { Action } from "@ngrx/store";
import { IUser } from "../../../shared/models/user.model";
import * as UserLoggedTypes from "../types";

export class LoginRequestAction implements Action {
  readonly type = UserLoggedTypes.RequestActionTypes.LOGIN_REQUEST;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = UserLoggedTypes.SuccessActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { userLogged: IUser }) {
  }
}

export class LoginFailureAction implements Action {
  readonly type = UserLoggedTypes.FailureActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: any | null }) {
  }
}

// logout actions
export class LogoutRequestAction implements Action {
  readonly type = UserLoggedTypes.RequestActionTypes.LOGOUT_REQUEST;
}

export class LogoutSuccessAction implements Action {
  readonly type = UserLoggedTypes.SuccessActionTypes.LOGOUT_SUCCESS;
}

export class LogoutFailureAction implements Action {
  readonly type = UserLoggedTypes.FailureActionTypes.LOGOUT_FAILURE;

  constructor(public payload: { error: any | null }) {
  }
}

// current user
export class CurrentUserRequestAction implements Action {
  readonly type = UserLoggedTypes.RequestActionTypes.CURRENT_USER_REQUEST;
}

export class CurrentUserSuccessAction implements Action {
  readonly type = UserLoggedTypes.SuccessActionTypes.CURRENT_USER_SUCCESS;

  constructor(public payload: { currentUser: IUser }) {
  }
}

export class CurrentUserFailureAction implements Action {
  readonly type = UserLoggedTypes.FailureActionTypes.CURRENT_USER_FAILURE;

  constructor(public payload: { error: any | null }) {
  }
}

// register actions
export class RegisterRequestAction implements Action {
  readonly type = UserLoggedTypes.RequestActionTypes.REGISTER_REQUEST;

  constructor(public payload: { firstName: string, lastName: string, phoneNumber: string, email: string, password: string }) {
  }
}

export class RegisterSuccessAction implements Action {
  readonly type = UserLoggedTypes.SuccessActionTypes.REGISTER_SUCCESS;

  constructor(public payload: { userLogged: IUser }) {
  }
}

export class RegisterFailureAction implements Action {
  readonly type = UserLoggedTypes.FailureActionTypes.REGISTER_FAILURE;

  constructor(public payload: { error: any | null }) {
  }
}

export type UserLoggedActions = LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction
  | CurrentUserRequestAction
  | CurrentUserSuccessAction
  | CurrentUserFailureAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | RegisterRequestAction;
