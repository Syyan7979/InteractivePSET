var express = require('express');
var router = express.Router();

const PsetsRepository = require('../repositories/pset_repository');
const db = require('../middleware/mysql_data_access');
const Redis = require('../middleware/redis_cache');
const controller = require('../controllers/pset_controller')(new PsetsRepository(db, Redis));

/* GET home page. */
router.post('', controller.createPset);

router.delete('', controller.deletePset);

router.patch('', controller.patchPset);

router.get('/course', controller.getCoursePset);

router.get('/student', controller.getStudentPset);

router.get('', controller.getAllPsets);

module.exports = router;