export enum RequestActionTypes {
  LOGIN_REQUEST = '[Authentication] Login request ',
  REGISTER_REQUEST = '[Authentication] Register request',
  LOGOUT_REQUEST = '[Authentication] Logout request',
  CURRENT_USER_REQUEST = '[Authentication] Current user request',
}

export enum FailureActionTypes {
  LOGIN_FAILURE = '[Authentication] Login failure',
  REGISTER_FAILURE = '[Authentication] Register failure',
  LOGOUT_FAILURE = '[Authentication] Logout failure',
  CURRENT_USER_FAILURE = '[Authentication] Current user failure',
}

export enum SuccessActionTypes {
  LOGIN_SUCCESS = '[Authentication] Login success',
  REGISTER_SUCCESS = '[Authentication] Register success',
  LOGOUT_SUCCESS = '[Authentication] Logout success',
  CURRENT_USER_SUCCESS = '[Authentication] Current user success',

}
