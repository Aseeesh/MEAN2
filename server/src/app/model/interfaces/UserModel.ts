
import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    address: string;
    phone: number;
    username: string;
    password: string;
}

export = UserModel;