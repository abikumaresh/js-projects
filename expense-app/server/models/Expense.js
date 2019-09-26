const mongoose = require('mongoose')
const Employee = require('./Employee')

const Schema = mongoose.Schema

const expenseSchema = new Schema( {
    group : {
        type : Schema.Types.ObjectId,
        ref : 'EmployeeGroup',
        required : true
    },
    reporter : {
        type : Schema.Types.ObjectId,
        ref : 'Employee'
    },
    employees : [ {
        type : Schema.Types.ObjectId,
        ref : 'Employee',
        required : true
    } ],
    category : {
        type : Schema.Types.ObjectId,
        ref : 'ExpenseCategory',
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense