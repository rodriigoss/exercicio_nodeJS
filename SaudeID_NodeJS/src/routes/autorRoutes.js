const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');

//router.get('/', controller.get);
//router.get('/:id', controller.getById);
router.post('/create', controller.post);
router.post('/authenticate', controller.authenticate);

module.exports = app => app.use('/auth', router);