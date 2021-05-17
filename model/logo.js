const mongoose = require("mongoose");

const LogoSchema = mongoose.Schema({
  logo: String,
});

const LogoModel = mongoose.model("LogoModel", LogoSchema);

module.exports = LogoModel;
