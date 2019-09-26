const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeGroupSchema = new Schema( {
    name : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const EmployeeGroup = mongoose.model('EmployeeGroup', employeeGroupSchema)

module.exports = EmployeeGroup