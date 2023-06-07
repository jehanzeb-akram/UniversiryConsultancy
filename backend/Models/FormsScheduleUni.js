const mongoose = require('mongoose');

const FormsScheduleUniSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required:true
        },
        dob : {
            type: Date,
            required: true,
        },
        nationality : {
            type: String,
            required: true,
        },
        lastEducation : {
            type: String,
            required: true,
        },
        yearOfGraduation : {
            type: String,
            required: true,
        },
        studyField : {
            type: String,
            required: true,
        },
        englishSkill : {
            type: String,
            required: true,
        },
        gender : {
            type: String,
            required: true,
        },
        university : {
            type: String,
            required: true,
        },
        major : {
            type: String,
            required: true,
        },
        degree : {
            type: String,
            required: true,
        },
        consultationPackage: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const FormsScheduleUni = mongoose.model('FormsScheduleUni', FormsScheduleUniSchema);

module.exports = FormsScheduleUni;
