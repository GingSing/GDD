var express = require('express');
var router = express.Router();

var user = require('./user');
var api = require('./api');

router.use('/api', api);
router.use('/user', user);

module.exports = router;
