import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import EmployeesList from './components/employee/EmployeesList'
import EmployeeShow from './components/employee/EmployeeShow'
import EmployeeNew from './components/employee/EmployeeNew'
import EmployeeGroupNew from './components/employee/EmployeeGroupNew'

import ExpensesList from './components/expense/ExpensesList'
import ExpenseShow from './components/expense/ExpenseShow'
import ExpenseNew from './components/expense/ExpenseNew'

import ExpenseCategoryNew from './components/expense/ExpenseCategoryNew'
import ExpenseSearchByDate from './components/expense/ExpenseSearchByDate';
import ReimbursementList from './components/reimbursement/ReimbursementList';

//import ExpenseBulkUpload from './components/expense/ExpenseBulkUpload'

function App() {
  return (
    <div>
      <h2 align='center'> Expense App </h2> <hr/>

      <BrowserRouter>
        {/* <Link to='/dashboard'> Dashboard </Link> | */}
        <Link to='/employees'> Employees </Link> |
        <Link to='/expenses'> Expenses </Link> |
        <Link to='/reimbursements'> Reimbursements </Link> <br/>
        
        <Switch>
        <Route exact path='/employees' component={EmployeesList} />
        <Route exact path='/employees/new' component={EmployeeNew} />
        <Route exact path='/employees/:id' component={EmployeeShow} />

        <Route exact path='/employeegroup' component={EmployeeGroupNew} />

        <Route exact path='/expenses' component={ExpensesList} />
        <Route path='/expenses/search' component={ExpenseSearchByDate} />

        <Route exact path='/expenses/new' component={ExpenseNew} />
        <Route exact path='/expenses/:id' component={ExpenseShow} />

        <Route exact path='/expense-category' component={ExpenseCategoryNew} />
        {/* <Route exact path='/expense-upload' component={ExpenseBulkUpload} /> */}
        <Route path='/expenses/search' component={ExpenseSearchByDate} />

        <Route exact path='/reimbursements' component={ReimbursementList} />


        </Switch>

      </BrowserRouter>

    </div>
  )
}

export default App;
