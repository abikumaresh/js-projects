const ExpenseCategory = require('../models/ExpenseCategory')

// Get all expense categories
module.exports.list = (req, res) => {
    ExpenseCategory.find()
    .then( categories => {
        console.log(categories)
        if (categories)
            res.json( categories )
    })
    .catch( err => res.json(err))
}

// Create expense category
module.exports.create = (req, res) => {
    const body = req.body
    const category = new ExpenseCategory(body)

    category.save()
    .then( category => {
        if (category)
            res.json(category)
    })
    .catch( err => res.json(err))
}

// Get Expense Category by id
module.exports.show = (req, res) => {
    const id = req.params.id
    ExpenseCategory.findById(id)
    .then( category => {
        if (category)
            res.json( category )
    })
    .catch( err => res.json(err))
}


