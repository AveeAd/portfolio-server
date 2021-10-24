const mongoose = require("mongoose");

const Blogs = mongoose.Schema({
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
  publshedDate: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
});

module.exports = mongoose.model("blogs", Blogs);
