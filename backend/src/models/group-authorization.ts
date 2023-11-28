import { InvalidParamError } from "../errors/invalid-param-error";

export class GroupAuthorization {
    private GROUP_AUTHORIZATION_CHOICES = ['USER', 'ADMIN'];

    constructor(private _name: string) {
        if (!this.GROUP_AUTHORIZATION_CHOICES.includes(this._name)) {
            throw new InvalidParamError('Group authorization invalid');
        }
    }

    get name(): string {
        return this._name;
    }
}