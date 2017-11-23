//route/api.routes.js
var express = require('express')

var router = express.Router()
var favorites = require('./api/favorites.route')
var logs = require('./api/actionlogs.routes');

router.use('/favorites', favorites);
router.use('/logs', logs);

module.exports = router;

