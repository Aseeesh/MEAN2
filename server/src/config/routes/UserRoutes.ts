
import express = require("express");
import UserController = require("./../../controllers/UserController");
var validateRequest=require('../routes/ValidateRequest');
var apiRoutes = express.Router();
var router = express.Router();
class UserRoutes {
    private _UserController: UserController;

    constructor () {
        this._UserController = new UserController();
    }
    get routes () {
        var controller = this._UserController;

       
        router.post("/users", controller.create);
        router.put("/users/:_id", controller.update);
       router.get("/users", controller.retrieve);
       router.get("/users/:_id", controller.findById);
        router.delete("/users/:_id", controller.delete);
         router.post('/login', controller.login);
        //  apiRoutes.use(validateRequest.apiUrl);
        //  apiRoutes.get("/users", controller.retrieve);
        //   apiRoutes.get("/users/:_id", controller.findById);
        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;