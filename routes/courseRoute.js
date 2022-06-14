const express = require("express");
const courseController = require("../controllers/courseController");
<<<<<<< HEAD
const roleMiddleware = require("../middlewares/roleMiddleware");
=======
const roleMiddleware = require('../middlewares/roleMiddleware')
>>>>>>> 74ddf7f847a05f223a24229e09c5209980f34df5

const router = express.Router();

router.route("/").post(roleMiddleware(["teacher", "admin"]), courseController.createCourse);
router.route("/").get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse)

module.exports = router;
