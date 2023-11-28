import { User } from "../../shared/models/user.model";

export interface State {
  userLogged: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: any | null;
}


export const initialState: State = {
  userLogged: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};
