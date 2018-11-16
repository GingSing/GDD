var jwt = require('jsonwebtoken')
var config = require('../config')

function verifyToken(token, res, callback){
  if(!token){
    res.status(401).send({ auth: false, message: 'No token provided.' });
  }else{
    console.log("verifying");
    jwt.verify(token, config.secret, function(err, decoded){
      if(err){
        res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
      }
      callback(decoded);
    });
  }
}

module.exports = {
  verifytoken: verifyToken,
};
