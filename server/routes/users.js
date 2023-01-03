var express = require('express');
var router = express.Router();

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const authenticate = require('../middleware/cookie_jwt_auth');
const UsersRepository = require('../repositories/user_repository');
const db = require('../middleware/mysql_data_access');
const Redis = require('../middleware/redis_cache');
const controller = require('../controllers/user_controller')(new UsersRepository(db, Redis), jwt, CryptoJS);


/* GET home page. */
router.post('', controller.createUser);

router.delete('', authenticate, controller.deleteUser);

router.patch('', authenticate, controller.patchUser);

router.get('/user', controller.getUser);

router.get('', controller.getAllUsers);

router.get('/students', controller.getStudents);

router.get('/teachers', controller.getTeachers);

router.get('/email', controller.emailLoginValidation);

router.get('/username', controller.usernameLoginValidation);

module.exports = router;