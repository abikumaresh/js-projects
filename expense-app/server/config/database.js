const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/expense-app-db', {useNewUrlParser: true, 
                                                    useUnifiedTopology: true})
.then( () => {
    console.log('Connected to db')
})
.catch(err => console.log(err))