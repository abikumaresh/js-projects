const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./config/route')
const mongoose = require('./config/database')

const port = 3020

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(port, () => console.log('Listening at port', port))