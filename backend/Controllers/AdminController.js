const adminModel = require('../Models/Admin.js');
const studentModel = require('../Models/Student.js');
const instructorModel = require('../Models/Instructor.js');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
  try {
    const adminId = req.body.adminId;
    const password = req.body.password;

    console.log(adminId + ' ' + password);

    adminModel
      .findOne({ adminId: adminId, password: password })
      .then((admin) => {
        if (!admin) {
          return res.status(404).json({
            status: 'fail',
            message: 'No Admin found with that ID',
          });
        }

        const token = jwt.sign({ id: admin._id }, process.env.SECRET, {
          expiresIn: '2000',
        });

        res.status(200).json({
          status: 'success',
          token,
          data: {
            admin: admin,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          status: 'fail',
          message: 'Didnt Find Admin',
        });
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: 'Didnt Find Admin',
    });
  }
};

exports.createAdmin = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const adminId = req.body.adminId;
  try {
    const admin = await adminModel.create({
      name: name,
      adminId: adminId,
      email: email,
      password: password,
    });
    res.status(201).json({
      status: 'success',
      data: {
        admin: admin,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createStudentProfile = async (req, res) => {
  console.log('Saving..');
  const name = req.body.name;
  const fatherName = req.body.fatherName;
  const motherName = req.body.motherName;
  const dob = req.body.dob;
  const gender = req.body.gender;

  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;
  const address = req.body.address;
  const nationality = req.body.nationality;

  const department = req.body.department;
  const semester = req.body.semester;
  const cgpa = req.body.cgpa;
  const sgpa = req.body.sgpa;

  const password = req.body.password;

  console.log(
    name + ' ' + email + ' ' + dob + ' ' + nationality + ' ' + gender
  );

  try {
    const newStudent = await studentModel.create({
      name: name,
      fatherName: fatherName,
      motherName: motherName,
      dob: dob,
      gender: gender,
      email: email,
      mobileNumber: mobileNumber,
      address: address,
      nationality: nationality,
      department: department,
      semester: semester,
      cgpa: cgpa,
      sgpa: sgpa,
      password: password,
    });

    res.status(201).json({
      status: 'success',
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(200).json({
      status: 'success',
      data: {
        students: students,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateStudentProfile = async (req, res) => {
  console.log(req.body);
  console.log(req.body.mobileNumber);

  const mobileNumber = req.params.number;
  console.log('Phone Number: ' + mobileNumber);

  try {
    const student = studentModel.findOneandUpdate(
      { mobileNumber: mobileNumber },
      {
        name: req.body.name,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address,
        nationality: req.body.nationality,
        department: req.body.department,
        semester: req.body.semester,
        cgpa: req.body.cgpa,
        sgpa: req.body.sgpa,
        password: req.body.password,
      },
      { new: true },
      (err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          console.log('Error in updating Student Profile');
        }
      }
    );
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteStudentProfile = async (req, res) => {
  const id = req.params.id;
  console.log('ID: ' + id);

  try {
    const student = await studentModel.findOneAndDelete({
      _id: id,
    });

    if (!student) {
      return res.status(404).json({
        status: 'fail',
        message: 'No Student found with that ID',
      });
    }

    res.status(204).json({
      status: 'success',
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStudentByNumber = async (req, res) => {
  const mobileNumber = req.params.number;

  try {
    studentModel
      .findOne({ mobileNumber: mobileNumber })
      .then((student) => {
        res.status(200).json(student);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          status: 'fail',
          message: 'Didnt Find Student',
        });
      });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createInstructor = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

  try {
    const Instructor = await instructorModel.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    });

    res.status(201).json({
      status: 'success',
      data: {
        instructor: Instructor,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getInstructors = async (req, res) => {
  try {
    const instructors = await instructorModel.find({});
    res.status(200).json(instructors);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getInstructorByMobile = async (req, res) => {
  const mobileNumber = req.params.number;

  try {
    instructorModel
      .findOne({ phoneNumber: mobileNumber })
      .then((student) => {
        res.status(200).json(student);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          status: 'fail',
          message: 'Didnt Find Instructor',
        });
      });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteInstructor = async (req, res) => {
  const mobileNumber = req.params.number;
  console.log('Mobile Number: ' + mobileNumber);

  try {
    const student = await instructorModel.findOneAndDelete({
      phoneNumber: mobileNumber,
    });

    if (!student) {
      return res.status(404).json({
        status: 'fail',
        message: 'No Instructor found with that ID',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.editInstructor = async (req, res) => {
  console.log(req.body);
  console.log(req.body.mobileNumber);

  const mobileNumber = req.params.number;
  console.log('Phone Number: ' + mobileNumber);

  try {
    instructorModel.findOneandUpdate(
      { phoneNumber: mobileNumber },
      {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.mobileNumber,
      },
      { new: true },
      (err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          console.log('Error in updating Student Profile');
        }
      }
    );
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
