const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  location: {
    type: String,
  },

  status: {
    type: String,
    default: "New Lead",
  },

}, {
  timestamps: true,
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;