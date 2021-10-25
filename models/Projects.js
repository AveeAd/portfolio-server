const mongoose = require("mongoose");

const Projects = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  contents: [
    {
      text: String,
      image: String,
    },
  ],
  github: String,
  links: [
    {
      name: String,
      link: String,
    },
  ],
  publshedDate: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
});

module.exports = mongoose.model("projects", Projects);
