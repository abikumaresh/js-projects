import React from 'react'
import Axios from '../../config/axios'
import {Link} from 'react-router-dom'

export default class EmployeesList extends React.Component {
    constructor() {
        super()

        this.state = {
            employees : []
        }
    }

    componentDidMount() {
        Axios.get('/employees')
        .then( response => {
            const employees = response.data
            this.setState({ employees })
        })
    }

    render() {
        return (
            <div>
                <h3> List of Employees - {this.state.employees.length} </h3>
                <ul> 
                    {
                        this.state.employees.map( employee => {
                            return <li key={employee._id} > <Link to={`/employees/${employee._id}`} > {employee.name} </Link> </li>
                        })
                    }
                </ul>
                <Link to='/employees/new'> Add a new Employee </Link> <br/>
                <Link to='/employeegroup'> Add new Employee Group </Link>
            </div>
        )
    }
}