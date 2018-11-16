var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema ({
  game_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Game'},
  date: { type: Date, default: Date.now },
  postedBy: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'User' },
  dateModified: { type: Date, default: Date.now },
  title:{ type: String, required: true, trim: true },
  content: { type: String, trim: true },
  rating: { type: Number, required: true},
  pictures: [{ type: Buffer }],
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
