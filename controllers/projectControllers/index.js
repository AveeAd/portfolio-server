const Projects = require("../../models/Projects");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json({ success: true, projects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "server error" });
  }
};

exports.addProject = async (req, res) => {
  try {
    const { title, contents, github, links, publishedDate } = req.body;
    const project = new Projects({
      title,
      contents,
      github,
      links,
      publishedDate,
    });
    await project.save();
    res.json({ success: true, project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "server error" });
  }
};
