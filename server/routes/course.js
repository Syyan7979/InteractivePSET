var express = require('express');
var router = express.Router();

const CourseRepository = require('../repositories/course_repository');
const db = require('../middleware/mysql_data_access');
const Redis = require('../middleware/redis_cache');
const controller = require('../controllers/course_controller')(new CourseRepository(db, Redis));

/* GET home page. */
router.post('', controller.createCourse);

router.post('/enroll', controller.enrollCourse);

router.delete('/delete', controller.deleteCourse);

router.delete('/drop', controller.dropCourse);

router.patch('', controller.patchCourse);

router.get('/coursestudent', controller.getCourseStudent);

router.get('/courseteacher', controller.getCourseTeacher);

router.get('/student', controller.getAllCoursesStudent);

router.get('/teacher', controller.getAllCoursesTeacher);

router.get('/enroll', controller.enrollValidation);

router.get('', controller.getStudentsInCourse);


module.exports = router;