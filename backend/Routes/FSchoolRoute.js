const express = require('express');
const FSchoolController = require('../Controllers/SchedSchoolController.js');

const router = express.Router();

router.post('/create', FSchoolController.createScheduleSchool);
router.get('/getAll', FSchoolController.getAllScheduleSchool);
router.get('/getById/:id', FSchoolController.getScheduleSchool);
router.delete('/delete/:id', FSchoolController.deleteScheduleSchool);
router.post('/update/:id', FSchoolController.updateScheduleSchool);

module.exports = router;