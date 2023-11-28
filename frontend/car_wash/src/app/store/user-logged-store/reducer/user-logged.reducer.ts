import * as UserLoggedActions from "../actions/user-logged.actions"
import * as UserLoggedTypes from "../types";
import * as State from "../state";

export function userLoggedReducer(state: State.State = State.initialState, action: UserLoggedActions.UserLoggedActions) {
  switch (action.type) {
    case UserLoggedTypes.RequestActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UserLoggedTypes.FailureActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case UserLoggedTypes.SuccessActionTypes.LOGIN_SUCCESS:
      const user = action.payload.userLogged;
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userLogged: { ...user }
      };
    // log out
    case UserLoggedTypes.RequestActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UserLoggedTypes.SuccessActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        userLogged: null
      };
    case UserLoggedTypes.FailureActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case UserLoggedTypes.RequestActionTypes.CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UserLoggedTypes.SuccessActionTypes.CURRENT_USER_SUCCESS:
      const currentUser = action.payload.currentUser;
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userLogged: { ...currentUser }
      };
    case UserLoggedTypes.FailureActionTypes.CURRENT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    // register
    case UserLoggedTypes.RequestActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UserLoggedTypes.FailureActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case UserLoggedTypes.SuccessActionTypes.REGISTER_SUCCESS:
      const registeredUser = action.payload.userLogged;
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userLogged: { ...registeredUser }
      };
    default:
      return state;
  }
}
