// Init
const { Schema, model } = require('mongoose');

// Admin Schema
const superAdminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      default: 'superadmin',
      enum: ['admin', 'superadmin'],
    },
    photo: String,
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// Model
module.exports = model('superadmin', superAdminSchema);
