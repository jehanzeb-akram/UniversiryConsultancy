//const StudentModel = require('../Models/StudentModel');
const StudentModel = require('../Models/Student.js')
const jwt = require('jsonwebtoken');

//Schema (Test)
//Name - Email - DOB - Nationality - Gender

//Login Student Profile
exports.loginStudentProfile = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        console.log(email + " " + password);

        StudentModel.findOne({email: email, password: password})
        .then((student) => {

            if(!student){
                return res.status(404).json({
                    status: 'fail',
                    message: 'No Student found with that ID'
                })
            }

            const token = jwt.sign({id: student._id}, process.env.SECRET, {
                expiresIn: "10s",
            });

            res.status(200).json({
                status: 'success',
                token,
                data: {
                    student: student
                }
            })
        }
        ).catch((err) => {
            console.log(err);
            res.status(400).json({
                status: 'fail',
                message: 'Didnt Find Student'
            })
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'Didnt Find Student'
        })
    }
}

//Create Student Profile
exports.createStudentProfile = async (req, res) => {
    console.log("Saving..");
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

    console.log(name + " " + email + " " + dob + " " + nationality + " " + gender);

    try { 
        const newStudent = await StudentModel.create(
            {
                name: name,
                fatherName: fatherName,
                motherName: motherName,
                dob: dob,
                gender: gender,
                email: email,
                mobileNumber: mobileNumber,
                address: address,
                nationality:nationality,
                department: department,
                semester: semester,
                cgpa: cgpa,
                sgpa: sgpa,
                password: password
            }
        )

        res.status(201).json({
            status: 'success',
            data: {
                student: newStudent
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

//Get Student Profile
exports.getStudentProfile = async (req, res) => {
    try {
        const student = await StudentModel.find();

        res.status(200).json({
            status: 'success',
            data: {
                student: student
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    } 
}

//Update Student Profile
exports.updateStudentProfile = async (req, res) => {

    console.log(req.body);
    console.log(req.body.mobileNumber);

    const mobileNumber = req.params.number;
    console.log("Phone Number: " + mobileNumber);

    try{
        StudentModel.findOneandUpdate({mobileNumber: mobileNumber}, {
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
            password: req.body.password
        }, {new: true}, (err, doc) => {
            if(!err){
                res.send(doc);
            }
            else{
                console.log("Error in updating Student Profile");
            }
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

//Delete Student Profile
exports.deleteStudentProfile = async (req, res) => {

    const mobileNumber = req.params.number;
    console.log("Mobile Number: " + mobileNumber);

    try{
        const student = await StudentModel.findOneAndDelete({mobileNumber : mobileNumber});

        if(!student){
            return res.status(404).json({
                status: 'fail',
                message: 'No Student found with that ID'
            })
        }

        res.status(204).json({
            status: 'success',
            data: null
        })
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

//Get Student Profile by Number
exports.getStudentByNumber = async (req, res) => {
    const mobileNumber = req.params.number;

    try{
        StudentModel.findOne({mobileNumber: mobileNumber})
        .then((student) => {res.status(200).json(student)})
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: 'fail',
                message: 'Didnt Find Student'
            })
        }
        )
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
