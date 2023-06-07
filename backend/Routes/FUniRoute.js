const express = require('express');
const FUniController = require('../Controllers/SchedUniController.js');

const router = express.Router();

router.post('/create', FUniController.createScheduleUni);
router.get('/getAll', FUniController.getAllScheduleUni);
router.get('/getById/:id', FUniController.getScheduleUni);
router.delete('/delete/:id', FUniController.deleteScheduleUni);
router.post('/update/:id', FUniController.updateScheduleUni);

module.exports = router;