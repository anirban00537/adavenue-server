const BlogModel = require("../model/blog.js");
exports.getBlogContent = getBlogContent = async (req, res) => {
  try {
    const Blog = await BlogModel.find();

    res.status(200).json(Blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createBlogContent = createBlogContent = async (req, res) => {
  const Blog = req.body;
  const newBlogContent = new BlogModel(Blog);
  try {
    await newBlogContent.save();
    res.status(201).json(newBlogContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

exports.deleteBlogPost = deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  await BlogModel.findByIdAndRemove(id);
  res.json({ message: "Blog deleted successfully" });
};
