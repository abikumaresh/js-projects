const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({
        notice : 'Welcome'
    })
})
app.listen(PORT, () => {
    console.log('Listening at port', PORT)
})