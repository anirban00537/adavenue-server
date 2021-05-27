const brandsModel = require("../model/brands.js");
exports.getbrandsContent = brandsContent = async (req, res) => {
  try {
    const brands = await brandsModel.find();

    res.status(200).json(brands);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createbrandsContent = brandsContent = async (req, res) => {
  const brands = req.body;
  const brandsContent = new brandsModel(brands);
  try {
    await brandsContent.save();
    console.log("success");
    res.status(201).json(brandsContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.deletebrandsPost = brandsPost = async (req, res) => {
  const { id } = req.params;
  await brandsModel.findByIdAndRemove(id);
  res.json({ message: "brands deleted successfully" });
};
