const Reimbursement = require('../models/Reimbursement')
const Axios = require('axios')


module.exports.create = (req, res) => {
    const body = req.body
    const reimbursement = new Reimbursement(body)

    reimbursement.save()
    .then( reimbursement => {
        res.json(reimbursement)
    })
    .catch( err => res.json(err))
}

module.exports.list = (req, res) => {
    
    Reimbursement.find()
    .then( reimbursements => {
        res.json(reimbursements)
    })
    .catch( err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Reimbursement.findById(id).populate('expense', ['reporter', 'amount', 'category', 'group'])
    .then( reimbursement => {        
        res.json(reimbursement)
    })
    .catch( err => res.json(err))
}