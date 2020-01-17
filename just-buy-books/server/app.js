const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log('Connected to DB')
})
.catch( () => {
    console.log('Error connecting to DB')
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api', userRoutes )


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running at port, ${port}`)
})