const Employee = require('../models/Employee')

// Create New Employee
module.exports.create = (req, res) => {
    const body = req.body
    const employee = new Employee(body)

    employee.save()
    .then( employee => {
        console.log(employee)
        res.json(employee)
    })
    .catch( err => {
        res.json(err)
    })

}

// Get all employees
module.exports.list = (req, res) => {
    Employee.find().populate('group', 'name')
    .then( employees => {
        res.json(employees)
    })
    .catch( err => {
        res.json(err)
    })
}

// Get employee by id
module.exports.show = (req, res) => {
    const id = req.params.id
    Employee.findById(id).populate('group', 'name')
    .then( employee => {
        res.json(employee)
    })
    .catch( err => {
        res.json(err)
    })
}

// Get Employees matching a specific group
module.exports.getEmployeesForGroup = (req, res) => {
    const id = req.params.id
    Employee.find({ group : { _id : id} })
    .then (employees => {
        console.log('inside group find')
        res.json(employees)
    })
    .catch(err => res.json(err))
}