const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    role:{
        type: String,
        enum:["student", "teacher", "admin"],
        default: "student"
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
=======
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    }
>>>>>>> 74ddf7f847a05f223a24229e09c5209980f34df5
});

UserSchema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})


const User = mongoose.model('User', UserSchema)
module.exports = User;