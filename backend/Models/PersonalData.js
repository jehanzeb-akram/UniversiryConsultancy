const mongoose = require('mongoose');

const PersonalDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required:true,
    },
    email : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin : {
        type: Boolean,
        required: true,
    }
});

const PersonalData = mongoose.model('PersonalData', PersonalDataSchema);

module.exports = PersonalData;