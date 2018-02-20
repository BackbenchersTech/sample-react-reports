let Users = require('../db/models/users');

let jwt = require('jsonwebtoken');

module.exports.login = function(req, res) {
    if(req.body.email !== undefined && req.body.passwd !== undefined) {
        Users.find({email: req.body.email}, function(err, users) {
            if(users.length === 1) {
                console.log(users[0])
                if (users[0].password === req.body.passwd) {
					var response = {user: users[0].toJSON()};
					var token = jwt.sign(response, process.env.SECRET, {expiresIn: '1h'});
					response.token = token;
					delete response.user;
					res.status(200).send(response);
				}
				else {

					res.status(401).send({"msg": "The password doesn't match."});
				}
            }
            else {
                res.status(401).send({"msg": "The username doesn't exist in our records"});
            }
        })
    }
    console.log("Login");
}
