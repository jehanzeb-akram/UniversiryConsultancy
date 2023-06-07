const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  name: {
    type: 'String',
    required: true,
  },
  adminId: {
    type: 'String',
    required: true,
    unique: true,
  },
  email: {
    type: 'String',
    required: true,
  },
  password: {
    type: 'String',
    required: true,
  },
});

const adminModel = mongoose.model('admins', adminSchema);

module.exports = adminModel;
