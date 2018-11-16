const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/user')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var config = require('../../config')

const userRouter = express.Router();
var db = mongoose.connection;

const logIn = (req, res) => {
  User.find({username: req.body.username}, function(err, user){
    if(err){
      return res.send(400, err);
    }else if(user.length > 0){
      user.map((data) => {
        if(bcrypt.compareSync(req.body.password, data.password)){

          var token = jwt.sign({ id: data.id }, config.secret, {
            expiresIn: 86400 //24 hours
          });

          return res.send(200, { success: "successful", user: data.username, token: token });
          //change to return tokens
        }
      })
    }else{
      return res.send(400, { error: "wrong password"});
    }
  })
}

const register = (req, res) => {
  if(!containsAll(req.body)){
    return res.status(422).json({ error: 'Missing Data'});
  }else if(!emailIsCorrect(req.body)){
    return res.status(422).json({ error: 'Email Incorrect'});
  }else if(!passwordConfirmed(req.body)){
    return res.status(422).json({ error: 'Password Not Confirmed'});
  }else{

    var salt = bcrypt.genSaltSync(config.hash);

    var userData = {
      username: req.body.username,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, salt),
      email: req.body.email
    }

    User.create(userData, function(err, user) {
      if(err) return res.send(400, { error: 'Username Or Email Unavailable'});
      return res.send(200, { success: 'Successfully Registered'});
    });
  }

  function containsAll(body){
    return (body.email !== "" && body.username !== "" && body.name !== "" && body.password !== "");
  }

  function emailIsCorrect(body){
    let email = body.email;
    let endsWithComOrCa = email.endsWith(".ca") || email.endsWith(".com");
    let containsAt = email.includes("@");
    return(endsWithComOrCa && containsAt && email.length < 65);
  }
  function passwordConfirmed(body){
    return body.passwordConf === body.password;
  }
}



userRouter.post('/login', logIn);
userRouter.post('/register', register);

module.exports = userRouter;
