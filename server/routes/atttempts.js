var express = require('express');
var router = express.Router();

const AttemptsRepository = require('../repositories/attempt_repository');
const db = require('../middleware/mysql_data_access');
const Redis = require('../middleware/redis_cache');
const controller = require('../controllers/attempt_controller')(new AttemptsRepository(db, Redis));


/* GET home page. */
router.post('', controller.createAttempt);

router.delete('', controller.deleteAttempt);

router.get('/item', controller.readAttemptsFromItem);

router.patch('', controller.attemptPatch);



module.exports = router;
