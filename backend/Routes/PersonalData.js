const express = require('express');
const PersonalController = require('../Controllers/UserController');

const router = express.Router();

router.post('/login', PersonalController.login);
router.post('/register', PersonalController.register);
router.post('/create', PersonalController.createPersonalData);
router.post('/update/:id', PersonalController.updatePersonalData);
router.delete('/delete/:id', PersonalController.deletePersonalData);
router.get('/getAll', PersonalController.getAll);
router.get('/getById/:id', PersonalController.getPersonalDataById)


module.exports = router;