const logoModel = require("../model/logo.js");
exports.getlogoContent = getlogoContent = async (req, res) => {
  try {
    const logo = await logoModel.find();

    res.status(200).json(logo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createlogoContent = createlogoContent = async (req, res) => {
  const logo = req.body;
  console.log(logo);
  const newlogoContent = new logoModel(logo);
  try {
    await newlogoContent.save();
    res.status(201).json(newlogoContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.deletelogoPost = deletelogoPost = async (req, res) => {
  const { id } = req.params;
  await logoModel.findByIdAndRemove(id);
  res.json({ message: "logo deleted successfully" });
};
