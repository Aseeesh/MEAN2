
import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _UserModel: IUserModel;

    constructor(UserModel: IUserModel) {
        this._UserModel = UserModel;
    }
    get username (): string {
        return this._UserModel.username;
    }

    get address (): string {
        return this._UserModel.address;
    }

    get phone (): number {
        return this._UserModel.phone;
    }
    get password():string{
        return this._UserModel.password;
    }
    
}
Object.seal(UserModel);
export =  UserModel;