const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  brandname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
});

const brand = mongoose.model("brand", brandSchema);

module.exports = brand;
