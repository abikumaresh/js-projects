const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

const port =3005
app.use(express.json())
app.use(cors())

app.get('/users/gender', function(req, res) {
    const name = req.query.name
    console.log(name)
    axios.get(`https://gender-api.com/get?name=${name}&key=kmAgCQjhSaWaQaLRSh`)
    .then(response => {
        const gender = response.data.gender
        res.json( {
            name,
            gender
        })
    })
    .catch(err => console.log(err))
})

app.listen(port, function() {
    console.log('Listening at port :', port)
})

