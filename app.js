const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const MongoStore = require("connect-mongo");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");
const session = require("express-session");

const app = express();

//Connect to DB
mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
  console.log("DB Connection Is Successfull");
});

//Template engine
app.set("view engine", "ejs");

//Global Variable

global.userIN = null;

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db'})
  })
);

//Routes
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
