const Blogs = require("../../models/Blogs");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.json({ success: true, blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "server error" });
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById({ _id: req.params.id });
    res.json({ success: true, blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.addBlogs = async (req, res) => {
  try {
    const { title, contents, publishedDate } = req.body;
    const blog = new Blogs({
      title,
      contents,
      publishedDate,
    });
    await blog.save();
    res.json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "server error" });
  }
};
