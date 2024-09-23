// 
const express =require('express');

const UserController = require('../Controller/UserController.js');

const router = express.Router();


router.post('/register',UserController.signUp)

 router.post('/login',UserController.login);
module.exports= router;