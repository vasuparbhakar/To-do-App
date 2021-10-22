const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

// console.log("Router Loaded");

router.get('/',homeController.home);
router.post('/newtodo',homeController.newtodo);
router.get('/delete-todo',homeController.delete_todo);
router.use('/users',require('./users'));

module.exports = router;