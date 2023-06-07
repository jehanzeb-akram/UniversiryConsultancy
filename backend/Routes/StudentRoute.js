const express = require('express');
const studentController = require('../Controllers/StudentController');

const router = express.Router();

router.post('/login', studentController.loginStudentProfile);
router.post('/createStudent', studentController.createStudentProfile);
router.get('/getStudent', studentController.getStudentProfile);
router.post('/updateStudent/:number', studentController.updateStudentProfile);
router.delete('/deleteStudent/:number', studentController.deleteStudentProfile);
router.get('/getStudentByNumber/:number', studentController.getStudentByNumber);

module.exports = router;