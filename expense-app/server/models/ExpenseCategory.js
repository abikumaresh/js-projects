const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseCategorySchema = new Schema( {
    category : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema)

module.exports = ExpenseCategory