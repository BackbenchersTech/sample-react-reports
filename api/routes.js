const express = require('express'),
      router = express.Router(),
      userService = require('./services/userService');

router.post('/login', userService.login);
router.get('/tokencheck', userService.tokenCheck);

module.exports = router;
