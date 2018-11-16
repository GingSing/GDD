var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema ({
  name: { type: String, trim: true },
  icon: { type: Buffer },
  rating: { type: Number, default: 0 },
  pictures: [{ type: Buffer}],
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;
