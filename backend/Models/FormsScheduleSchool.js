const mongoose = require('mongoose');

const FormsScheduleSchoolSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
        
    },
    dob : {
        type: Date,
        required: true,
    },
    nationality : {
        type: String,
        required: true,
    },
    gender : {
        type: String,
        required: true,
    },
    school : {
        type: String,
        required: true,
    },
    englishSkill : {
        type: String,
        required: true,
    },
    consultationPackage: {
        type: String,
        required: true,
    }
});

const FormsScheduleSchool = mongoose.model('FormsSchedule', FormsScheduleSchoolSchema);

module.exports = FormsScheduleSchool;