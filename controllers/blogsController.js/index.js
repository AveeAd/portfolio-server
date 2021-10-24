const Blogs = require("../../models/Blogs");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.json({ success:true, blogs });
  } catch (error) {
    console.log(error);
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
    blog.save();
    res.json(blog);
  } catch (error) {
    console.log(error);
  }
};
