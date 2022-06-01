const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  
  try {
    const course = await Course.create(req.body);  

    res.status(201).json({
      status: "success",
      course,
    });
    // res.send("Yeni Kurs Oluşturuldu.")
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  
    try {
      const courses = await Course.find();
      
      res.status(200).render("courses", {
          page_name: "courses",
          courses
      });
      // res.send("Yeni Kurs Oluşturuldu.")
    } catch (error) {
      res.status(400).json({
        status: "failure",
        error,
      });
    }
  };
