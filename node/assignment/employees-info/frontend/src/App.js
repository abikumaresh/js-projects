import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import EmployeeServices from './components/employees/EmployeeServices'
import NewEmployee from './components/employees/NewEmployee'
import EditEmployee from './components/employees/EditEmployee'

function App() {
  return (
    <div>            
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginForm} />
          <Route path='/employees/home' component={Home} />
          <Route exact path='/employees/services' component={EmployeeServices} />
          <Route exact path='/employees/new' component={NewEmployee} />
          <Route exact path='/employees/:id' component={EditEmployee} />
        </Switch>        
      </BrowserRouter>
    </div>
  )
}

export default App;
