const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  name: {
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

const driver = mongoose.model("driver", driverSchema);

module.exports = driver;
