import express = require("express");
var jwt = require('jsonwebtoken');

class ValidateRequest {
    apiUrl(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            if(req.url === '/login' || req.url === '/renew'){
                next();
            } else {
                var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers["authorization"];
            if (token) {
                jwt.verify(token, 'splg', function (err, decoded) {
                    if (err) {
                        res.json({
                            success: false,
                            message: 'Failed to authenticate token.'
                        });
                    } else {
                        //req.decoded = decoded;
                        next();
                    }
                });
            } else {
                res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });
            }
            }
            
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    validate(token : any,callback: (result: any) => void){
        if (token) {
                jwt.verify(token, 'splg', function (err, decoded) {
                    if (err) {
                        callback({success: false,
                            message: 'Failed to authenticate token.'});
                    } else {
                        callback({success: true,
                            message: 'authenticate'});
                    }
                });
            } else {
                callback({
                     success: false,
                    message: 'No token provided.'
                });
            }
    }

    renew(data : any,callback:(result:any)=>void){
        // let detail = JSON.parse(data);
        jwt.verify(data.token, 'splg', function (err, decoded) {
            if(err){
                callback({success:false,token : data.token});
            } else {
                let jwtToken = jwt.sign(data.user, 'splg',{expiresIn : '2m'});
                callback({success:true,token : jwtToken});
            }
        });
        
    }
}
export = ValidateRequest;