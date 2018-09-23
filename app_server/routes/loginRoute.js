var express = require('express');
var router = express.Router();

var loginController = require('../controller/loginController');

router.get('/', loginController.index);
router.post('/', loginController.indexPost);

module.exports = router;