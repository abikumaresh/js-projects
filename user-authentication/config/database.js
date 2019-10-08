const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/user-authentication', 
        { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log('Successfully connected to DB'))
.catch( (err) => console.log(err) )

module.exports = mongoose