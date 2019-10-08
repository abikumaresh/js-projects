const User = require('../models/User')
const pick = require('lodash/pick')

// register an user
module.exports.register = (req, res) => {
    console.log('called register')
    const body = req.body
    const user = new User(body)
    user.save()
    .then(user => {
        res.send( 
            pick(user, ['_id', 'username', 'email'])
        )
    })
    .catch(err => res.json(err))
}

// user login
module.exports.login = (req, res) => {
    console.log('called login')
    const body = req.body
    User.findByCredentials(body.email, body.password)
    .then(function(user) {
        // generate jwt 
        return user.generateToken()
    })
    .then(function(token){
        console.log('after token generation ', token)
        res.setHeader('x-auth', token).send({})
    })
    .catch(function(err) {
        res.json(err)
    })    
}

// user account
module.exports.account = (req, res) => {
    const { user } = req
    res.send(user)
}

// user logout
module.exports.logout = (req, res) => {
    const {user, token} = req
    User.findOneAndUpdate(user._id, { $pull : { tokens : {token} } })
    .then(function() {
        res.json({
            notice : 'successfully logged out'
        })
    })
}