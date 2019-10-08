const mongoose = require('mongoose')

const Schema = mongoose.Schema
const reimbursementSchema = new Schema ( {
    expense : {
        type : Schema.Types.ObjectId,
        ref : 'Expense'
    },
    reimbursed : {
        type : Boolean,
        default : 'false'
    },
    created_at : {
        type : Date,
        default : new Date()
    }
})

const Reimbursement = mongoose.model('Reimbursement', reimbursementSchema)

module.exports = Reimbursement