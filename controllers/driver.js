const driverModel = require("../model/drivers.js");
exports.getdriverContent = getdriverContent = async (req, res) => {
  try {
    const driver = await driverModel.find();

    res.status(200).json(driver);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createdriverContent = createdriverContent = async (req, res) => {
  const driver = req.body;
  const newdriverContent = new driverModel(driver);
  try {
    await newdriverContent.save();
    console.log("success");
    res.status(201).json(newdriverContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.deletedriverPost = deletedriverPost = async (req, res) => {
  const { id } = req.params;
  await driverModel.findByIdAndRemove(id);
  res.json({ message: "driver deleted successfully" });
};
