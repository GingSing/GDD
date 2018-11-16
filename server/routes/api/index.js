const express = require('express')
const mongoose = require('mongoose')

const { verifyToken } = require('../verification')
const Game = require('../../models/game')
const Post = require('../../models/post')

const apiRouter = express.Router();
var db = mongoose.connection;

//Game
const getAllGames = (req, res) => {
  Game.find({}, function(err, games){
    if(err) return res.send(400, err);
    return res.send(200, games);
  })
};

const getGameById = (req, res) => {
  let requestedId = req.params.id;
  Game.find({ _id: requestedId }, function(err, game){
    if(err) return res.send(400, err);
    return res.send(200, game);
  })
}






//Posts
const getGameReviewsById = (req, res) => {
  let requestedId = req.params.id;
  Post.find({ game_id: requestedId }, function(err, posts){
    if(err) return res.send(400, err);
    return res.send(200, posts);
  })
}

const reviewGame = (req, res) => {

  let {user_id, game_id, title, content, rating, pictures } = req.body;

  var postData = {
    postedBy: mongoose.Types.ObjectId(user_id),
    game_id: mongoose.Types.ObjectId(game_id),
    title: title,
    content: content,
    rating: rating,
    pictures: pictures,
  }

  Post.create(postData, function(err, result){
    if(err) return res.send(404, 'error 404');
    return res.send(200, 'success');
  });
}

const changeReview = (req, res) => {
  let {post_id, user_id} = req.body;
  Post.findOne({_id: post_id}).then((output) =>{
    if(output.postedBy === user_id){
      Post.update({_id: post_id}, {$set: {}})
        .then((err, num, success) =>{
          if(err) return res.status(500, err);
            return res.status(200, )
        })
    }
    return res.status(404);
  })
}

const deleteReview = (req, res) => {
  let {post_id, user_id} = req.body;
  Post.findOne({_id: post_id}).then((output) => {
    if(output.postedBy === user_id){
      Post.deleteOne({_id: post_id})
    }
  })
}

// Admin
const addGame = (req, res) => {
  //add a check for admin
  var gameData = {
    name: req.body.name,
    rating: req.body.rating,
  }

  Game.create(gameData, function(err, result){
    if(err) return res.send(400, 'error 404');
    return res.send(200, 'success');
  });
}


apiRouter.get('/games', getAllGames);
apiRouter.get('/games/:id', getGameById);
apiRouter.get('/games/:id/reviews', getGameReviewsById);

apiRouter.post('/games/reviewGame', reviewGame);
//apiRouter.post('/games/changeReview', changeReview);
//apiRouter.post('/games/deleteReview', deleteReview);

//admin
apiRouter.post('/games/addGame', addGame);

module.exports = apiRouter;
