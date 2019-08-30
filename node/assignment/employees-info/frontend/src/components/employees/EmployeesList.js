import React from 'react'
import Axios from './../../config/axios';

export default class EmployeesList extends React.Component {
        
    handleEdit = (e) => {
        console.log(e.target.name)
        this.props.handleEdit(e.target.name)
    }

    handleDelete = (e) => {
        console.log(e.target.name)
        Axios.delete(`/employees/${e.target.name}`)
        .then(response => {
            console.log(response.data.employees)
            this.props.handleDelete(response.data.employees)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            <h3> Listing all employees </h3> <br/>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody> 
                        {            
                            this.props.employees.map( employee => {
                                return <tr key={employee.id}> 
                                            <td> {employee.firstname} </td>
                                            <td> {employee.lastname} </td>
                                            <td> {employee.gender}   </td>
                                            <td> {employee.address} </td>
                                            <td> {employee.dob} </td>
                                            <td> 
                                                <input type='button' name={employee.id} value='edit' onClick={this.handleEdit} />
                                                <input type='button' name={employee.id} value='delete' onClick={this.handleDelete} />
                                            </td>
                                        </tr>
                            })
                        }
                        
                    </tbody>
                </table>
        </div>
        )
    }
}