const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = new Schema( {
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    group : {
        type : Schema.Types.ObjectId,
        ref : 'EmployeeGroup',
        required : true
    },
    address : {
        type : String,
    },
    role : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee