var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

const routes = require('./routes')
const config = require('./config')

let connection = 'mongodb://' + config.mLabUser + ':' + config.mLabPassword + '@ds145043.mlab.com:45043/gdd';
mongoose.connect(connection, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', function(){
  console.log('connected to mongodb');
  //only operates if connected to db
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/', routes);
  app.set('port', process.env.PORT || 3001);

  app.listen(app.get('port'),(res,req) => {
    console.log("listening on port" + app.get('port'));
  });
});
