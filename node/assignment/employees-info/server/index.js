const express = require('express')
const cors = require('cors')
const fs = require('fs')
const port = 3010

const app = express()
app.use(cors())
app.use(express.json())

// Login API
app.post('/login', function(req, res) {    
    //console.log(req.body)
    fs.readFile('./data/db.json', 'utf-8', function(err, data) {
        let respObj = {
            status : '',
            notice : ''
        }

        if (err) {
            console.log(err)
        }
        fileContent = JSON.parse(data)
        
        const employee = fileContent.find(emp=> {
            return emp.username == req.body.username
        })
        if (employee) {
            console.log('employee found')
            if (employee.password == req.body.password) {
                respObj.status = 'success'
                respObj.notice = 'user validated'
            }
            else {
                respObj.status = 'error'
                respObj.notice = 'password is invalid'
            }
        }
        else {
            console.log('Username not matched')
            respObj.status = 'error'
            respObj.notice = 'username is invalid'
        }

        res.json(respObj)
    })
})

// Get All Employees
app.get('/employees', function(req, res) {
    fs.readFile('./data/emp.json', 'utf-8', function(err, data) {
        if (err) throw err

        res.json({
            'status' : 'success',
            'employees' : JSON.parse(data)
        })
    })
})

// Get employee with ID
app.get('/employee/:id', function(req, res) {
    const id = req.params.id
    fs.readFile('./data/emp.json', 'utf-8', function(err, data) {
        if (err) throw err

        const employee = JSON.parse(data).find(employee => {
            return employee.id === Number(id)
        })
        if (employee) {
            res.json({ 'employee' : employee })
        }
        else {
            res.json({})
        }
    })
})

// New Employee API
app.post('/employee/new', function(req,res){
    fs.readFile('./data/emp.json', 'utf-8', function(err, data) {
        if (err) throw err

        let employees = []
        employees =JSON.parse(data)
        employees.push(req.body)
        console.log(employees)

        fs.writeFileSync('./data/emp.json', JSON.stringify(employees), function(err, data) {
            if (err) throw err            
        })   
        res.send({
            'status' : 'success',
            'notice' : 'Employee added successfully'
        })     
    })
})

// Delete an employee
app.delete('/employees/:id', function(req, res) {
    const id = req.params.id
    fs.readFile('./data/emp.json', 'utf-8', function(err, data) {
        if (err) throw err

        let employees = []
        employees =JSON.parse(data)

        const currentEmployees = employees.filter( employee => {
            return employee.id != id
        })

        fs.writeFileSync('./data/emp.json', JSON.stringify(currentEmployees), function(err, data) {
            if (err) throw err            
        }) 

        res.send( {
            'notice' : 'employee deleted successfully',
            'employees' : currentEmployees
        })
    })
})

//Update an employee
app.put('/employee/:id', function(req, res) {
    console.log(req.params.id, req.body)
    fs.readFile('./data/emp.json', 'utf-8', function(err, data) {
        if (err) throw err
        let employees =JSON.parse(data)
        employees.map( employee => {
            if (employee.id == req.params.id) {
                Object.assign(employee, req.body)
            }            
        })
        fs.writeFileSync('./data/emp.json', JSON.stringify(employees), function(err, data) {
            if (err) throw err            
        })
        res.json({
            'status' : 'success'
        })
    })

})

app.listen(port, function() {
    console.log('Listening at port ', port)
})