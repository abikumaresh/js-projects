import React from 'react'
import Axios from '../../config/axios'
import NewEmployeeForm from './NewEmployeeForm'

export default class EmployeeNew extends React.Component {
    
    
    handleSubmit = (formData) => {
        console.log('new', formData)
        Axios.post('/employees', formData)
        .then(response => {
            console.log(response.data)
            this.props.history.push('/employees')
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <NewEmployeeForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}