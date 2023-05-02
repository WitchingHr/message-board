const express = require('express');
const controller = require('../controllers/indexController');

const router = express.Router();

// routes
router.get('/', controller.index);

router.get('/new', controller.newMessage);

router.post('/new', controller.create);

module.exports = router;
