const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override')
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')

const app = express();


// Connect DB
mongoose.connect('mongodb+srv://cihan:Deadburn00.@cluster0.nsgfb.mongodb.net/smartedu-db?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB Connected Successfuly');
    })


//Tamplate Engine
app.set("view engine", "ejs")



//Global Veriable

global.userIN = null



// MiddleWares

app.use(express.static("public"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://0.0.0.0:27017/smartedu-db' }),


}))
app.use(flash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash()
    next()
})

app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))




//Routes
app.use('*', (req, res, next) => {
    userIN = req.session.userID
    next()

})
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute)





const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
})