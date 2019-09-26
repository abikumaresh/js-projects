const Expense = require('../models/Expense')
const fs = require('fs')
const csv = require('fast-csv')
const fileRows = [];

// Create New Expense
module.exports.create = (req, res) => {
    const body = req.body
    const expense = new Expense(body)

    expense.save()
    .then( expense => {
        //console.log(expense)
        res.json(expense)
    })
    .catch( err => {
        res.json(err)
    })
}

// Get all expenses
module.exports.list = (req, res) => {
    Expense.find().populate('employees','name').populate('reporter', ['name','email']).populate('group', 'name').populate('category','category')
    .then( expenses => {
        res.json(expenses)
    })
    .catch( err => {
        res.json(err)
    })
}

// Get employee by id
module.exports.show = (req, res) => {
    const id = req.params.id
    Expense.findById(id).populate('employees','name').populate('reporter', ['name','email']).populate('group', 'name').populate('category','category')
    .then( expense => {
        res.json(expense)
    })
    .catch( err => {
        res.json(err)
    })
}

// Expense bulk upload
module.exports.upload = (req,res) => {
    let data = []
    try {
        csv.fromPath(req.file.path)
        .on("data", function (data) {
            fileRows.push(data); // push each row
        })
        .on("end", function () {
            console.log(fileRows.length)
            fs.unlinkSync(req.file.path)  // remove temp file
            fileRows.map( row => {
                //console.log(row)
                const employees = row[2].split(',')
                const insertRecord = {
                    'group' : row[0],
                    'reporter' : row[1],
                    employees,
                    'category' : row[3],
                    'amount' : row[4]
                }
                //console.log(insertRecord)
                data.push(insertRecord)
            })
            console.log(data)

            Expense.insertMany(data)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
        })       
        
        res.send({
            'notice' : `File ${req.file.originalname} processed and expenses added`
        })

    } catch (err) {
        res.status(400).send({})
    }
}