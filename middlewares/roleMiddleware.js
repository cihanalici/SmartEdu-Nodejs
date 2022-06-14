module.exports = (roles) => {
    return (req, res, next) => {
        const userRole = req.body.role;
        if(roles.includes(userRole)) {
            next();
        } else {
<<<<<<< HEAD
            return res.status(401).send('YOU CANT DO IT');
=======
            return res.status(401).send('You cant do it')
>>>>>>> 74ddf7f847a05f223a24229e09c5209980f34df5
        }
    }
}