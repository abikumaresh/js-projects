const EmployeeGroup = require('../models/EmployeeGroup')

// Get all employee groups
module.exports.grouplist = (req, res) => {
    EmployeeGroup.find()
    .then( groups => {
        console.log(groups)
        if (groups)
            res.json( groups )
    })
    .catch( err => res.json(err))
}

// Create employee group
module.exports.addgroup = (req, res) => {
    const body = req.body
    const group = new EmployeeGroup(body)

    group.save()
    .then( group => {
        if (group)
            res.json(group)
    })
    .catch( err => res.json(err))
}

// Get Employee group by id
module.exports.showgroup = (req, res) => {
    const id = req.params.id
    EmployeeGroup.findById(id)
    .then( group => {
        if (group)
            res.json( group )
    })
    .catch( err => res.json(err))
}

// Get Employee Role List
module.exports.rolelist = (req, res) => {
    res.json( {
        roles : ['admin','employee']
    })
}
