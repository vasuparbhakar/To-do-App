const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');


// console.log("Router Loaded");

router.get('/profile',usersController.profile);
router.get('/post',usersController.post);

module.exports = router;