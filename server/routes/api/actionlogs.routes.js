
var express = require('express');

var router = express.Router();


var LogsController = require('../../controllers/actionlog.controller');
router.get('/', LogsController.getLogs);
router.post('/', LogsController.createLog);

module.exports = router;