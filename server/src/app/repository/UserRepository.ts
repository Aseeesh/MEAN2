
import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./BaseRepository");

class UserRepository  extends RepositoryBase<IUserModel> {
    constructor () {
        super(UserSchema);
    }
   login (username:string,password:string, callback: (error: any, result: IUserModel[]) => void) {
        this._model.find( {username:username, password:password}, callback);
    }
 
}

Object.seal(UserRepository);
export = UserRepository;