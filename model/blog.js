const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BlogModel = mongoose.model("BlogModel", BlogSchema);

module.exports = BlogModel;
