const express = require("express");
const router = express.Router();

const {
  getProjects,
  addProject,
} = require("../controllers/projectControllers");

router.route("/").get(getProjects);
router.route("/add").post(addProject);

module.exports = router;
