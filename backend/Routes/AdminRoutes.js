const express = require('express');
const adminController = require('../Controllers/AdminController.js');

const adminRouter = express.Router();

adminRouter.post('/login', adminController.loginAdmin);
adminRouter.post('/createAdmin', adminController.createAdmin);

adminRouter.get('/getStudents', adminController.getStudents);
adminRouter.get('/getStudent/:number', adminController.getStudentByNumber);
adminRouter.get('/getInstructors', adminController.getInstructors);
adminRouter.get(
  '/getInstructor/:number',
  adminController.getInstructorByMobile
);
adminRouter.delete('/deleteStudent/:id', adminController.deleteStudentProfile);
adminRouter.delete(
  '/deleteInstructor/:number',
  adminController.deleteInstructor
);
adminRouter.post('/editStudent/:number', adminController.updateStudentProfile);
adminRouter.post('/editInstructor/:number', adminController.editInstructor);

adminRouter.post('/createStudent', adminController.createStudentProfile);
adminRouter.post('/createInstructor', adminController.createInstructor);

module.exports = adminRouter;
