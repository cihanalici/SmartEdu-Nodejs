# SmartEdu-Nodejs

Live Demo: [SmartEdu](https://smartedu-nodejs.onrender.com/)

This is a simple project to demonstrate the use of Node.js and Express.js to create a simple web application. The application is a simple website that displays a list of courses and allows the user to add new courses.

## Stories

- As a user, I can view a list of courses.
- As a user, I can enroll in a course.
- As a user, I can unenroll from a course.
- As a user, I can see categories of courses.
- As a user, I can email the course instructor.

- As an admin, I can add a course.
- As an admin, I can delete a course.
- As an admin, I can update a course.

## Dependencies

- bcryptjs
- connect-flash
- connect-mongo
- dotenv
- ejs
- express
- express-session
- mongoose
- nodemon
- express-validator
- nodemailer
- slugify
- method-override

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following:
MONGO_URI=your_mongo_uri
PORT=5000
4. Run `npm run dev` to start the server

## With Docker

1. Clone the repository
2. Run `docker-compose up --build`
3. Visit `http://localhost:5000`
4. To stop the server, run `docker-compose down`

![Site](image.png)