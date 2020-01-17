const User = require('../models/user')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.signup = (req, res) => {
    const user = new User(req.body)
    user.save()
    .then(function(user) {
        user.salt = undefined
        user.hashed_password = undefined
        res.send({
            user,
            message : 'user created successfully'
        })
    })
    .catch(function(err) {
        res.status(400).send({
            err : errorHandler(err)
        })
    })
}

