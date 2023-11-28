export interface IUser {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  groupAuthorization: string | null;
}

export class User implements IUser {
  constructor(
    public id: string | null,
    public email: string | null,
    public firstName: string | null,
    public lastName: string | null,
    public phoneNumber: string | null,
    public groupAuthorization: string | null,
    ) {
  }

}
