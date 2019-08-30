import React from 'react'
import Axios from '../../config/axios';

export default class EditEmployee extends React.Component {
    constructor() {
        super()

        this.state = {
            id :'',
            firstname : '',
            lastname : '',
            gender : '',
            address : '',
            dob : ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        Axios.get(`/employee/${id}`)
        .then(response => {
            console.log(response.data.employee)
            const { id, firstname , lastname, gender, address, dob }  = response.data.employee
            this.setState({
                id, firstname, lastname, gender, address, dob
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { id, firstname , lastname , gender, address, dob } = this.state
        console.log( this.state.firstname)
        const editFormData = {
            id, firstname , lastname , gender, address, dob 
        }
        console.log(editFormData)
        Axios.put(`/employee/${this.state.id}`, editFormData)
        .then(response => {
            console.log(response.data.employees)
            this.props.history.push('/employees/services')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3> Edit Employee Form </h3> 
                {
                    this.state.firstname !== '' && 
                        <form onSubmit={this.handleSubmit}>
                        <label htmlFor='firstname'> First Name </label>
                        <input type='text' name='firstname' id='firstname' value={this.state.firstname} onChange={this.handleChange} /> <br/>

                        <label htmlFor='lastname'> Last Name </label>
                        <input type='text' name='lastname' id='lastname' value={this.state.lastname} onChange={this.handleChange} /> <br/>
                

                        <label htmlFor='address'> Address </label>
                        <input type='text' name='address' id='address' value={this.state.address} onChange={this.handleChange} /> <br/>

                        <label htmlFor='dob'> Date of Birth </label>
                        <input type='date' name='dob' id='dob' value={this.state.dob} onChange={this.handleChange} /> <br/>

                        <input type='submit' />

                        </form>
                }
            </div>
        )
    }
}