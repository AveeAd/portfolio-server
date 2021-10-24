const express = require("express");
const router = express.Router();
const { getBlogs, addBlogs } = require("../controllers/blogsController.js");

router.route("/").get(getBlogs);
router.route("/add").post(addBlogs);

module.exports = router;
