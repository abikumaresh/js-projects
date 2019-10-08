const express = require('express')
const mongoose = require('./config/database')
const morgan = require('morgan')

const app = express()
const port = 3011
const router = require('./config/routes')

app.use(express.json())
app.use(morgan(':method :url :status :remote-addr :date'))
app.use('/', router)

app.listen(port, () => {
    console.log('Listening at port', port)
})