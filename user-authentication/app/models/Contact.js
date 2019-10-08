const mongoose = require('mongoose') 
const Schema = mongoose.Schema
const isNumericValid = require('validator/lib/isNumeric')
const isEmailValid = require('validator/lib/isEmail')

const contactSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        validate : {
            validator : function(value) {
                return isEmailValid(value)
            },
            message : function() {
                return 'Not a valid email'
            }
        }
    },
    mobile : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10,
        validate : { 
            validator : function(value) {
                return isNumericValid(value)
            },
            message : function() {
                return 'mobile can contain only numbers'
            }
        }
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact