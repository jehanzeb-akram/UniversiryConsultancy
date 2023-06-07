const express = require('express');
const School = require('../Controllers/SchedSchoolController');

const router = express.Router();
router.post('/createschool', School.createScheduleSchool);
module.exports = router;