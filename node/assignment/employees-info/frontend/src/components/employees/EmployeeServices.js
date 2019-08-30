import React from 'react'
import EmployeesList from './EmployeesList'
import Axios from '../../config/axios'

export default class EmployeeServices extends React.Component {
    constructor() {
        super()

        this.state = {
            employees : []
        }
    }

    componentDidMount() {
        Axios.get('/employees')
        .then(response => {
            const employees = response.data.employees
            this.setState( { employees} )
        })
        .catch(err => console.log(err))
    }    

    handleSubmit = (e) => {
        console.log('handlesubmit')
        this.props.history.push('/employees/new')
    }

    handleDelete = (employees) => {
        this.setState( { employees })
    }

    handleEdit = (id) => {
        console.log(id)
        this.props.history.push(`/employees/${id}`)
    }

    render() {
        return(
            <div>
                <h2> Employee Services </h2> <br/>
                <input type='button' value='Add New Employee' onClick={this.handleSubmit} />
                { 
                    this.state.employees.length > 0 && 
                        <EmployeesList employees={this.state.employees} 
                                    handleDelete={this.handleDelete} 
                                    handleEdit={this.handleEdit} />
                }
            </div>
        )
    }
}