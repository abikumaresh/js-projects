const express = require('express')
const EmployeeController = require('../controllers/EmployeeController')
const ExpenseController = require('../controllers/ExpenseController')
const EmployeeGroupRoleControler = require('../controllers/EmployeeGroupRoleController')
const ExpenseCategoryControler = require('../controllers/ExpenseCategoryController')

const multer = require('multer')
const csv = require('fast-csv')
var upload = multer({dest:'/Users/kdev/uploads'});

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        notice : 'Home Page'
    })
})

// Employees
router.post('/employees', EmployeeController.create)
router.get('/employees', EmployeeController.list)
router.get('/employees/:id', EmployeeController.show)

// Employees of a group
router.get('/employees/group/:id', EmployeeController.getEmployeesForGroup)

// Expenses
router.post('/expenses', ExpenseController.create)
router.get('/expenses', ExpenseController.list)
router.get('/expenses/:id', ExpenseController.show)
router.post('/expenses/upload', upload.single('profile'), ExpenseController.upload)


// Employee roles
router.get('/employeeroles', EmployeeGroupRoleControler.rolelist)

// Employee Groups
router.get('/employeegroups', EmployeeGroupRoleControler.grouplist)
router.post('/employeegroups', EmployeeGroupRoleControler.addgroup)
router.get('/employeegroup/:id', EmployeeGroupRoleControler.showgroup)

//Expense Category
router.get('/expense-category', ExpenseCategoryControler.list)
router.post('/expense-category', ExpenseCategoryControler.create)
router.get('/expense-category/:id', ExpenseCategoryControler.show)

module.exports = router