const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    //Personal Information
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    //Contact Information
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },

    nationality: {
        type: String,
        required: true
    },

    //Academic Information
    department: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    cgpa: {
        type: Number,
        required: true
    },
    sgpa: {
        type: Number,
        required: true
    },


    //Other Information
    password: {
        type: String,
        required: true
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;