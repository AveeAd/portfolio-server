const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getSingleBlog,
  addBlogs,
} = require("../controllers/blogsController");

router.route("/").get(getBlogs);
router.route("/add").post(addBlogs);
router.route("/:id").get(getSingleBlog);

module.exports = router;
