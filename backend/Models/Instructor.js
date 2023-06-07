const mongoose = require('mongoose');

const instructorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const instructorModel = mongoose.model('Instructor', instructorSchema);
module.exports = instructorModel;