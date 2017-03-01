
import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            username : {
                type: String,
                required: true
            }, 
            address: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("Useres", UserSchema.schema);
export = schema;""