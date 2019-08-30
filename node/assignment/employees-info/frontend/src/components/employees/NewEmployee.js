import React from 'react'
import Axios from '../../config/axios'

export default class NewEmployee extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname :'',
            lastname:'',
            gender:'',
            address:'',
            dob : ''           
        }
    }

    handleChange = (e) => {
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { firstname, lastname, gender, address, dob } = this.state
        const formData = {
            id : Number(new Date()),
            firstname,
            lastname,
            gender,
            address, 
            dob
        }
        console.log(formData)
        Axios.post('/employee/new', formData)
        .then(response => {
            console.log(response.data)
            this.props.history.push('/employees/services')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3> Add New Employee </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='firstname'> First Name </label>
                    <input type='text' name='firstname' id='firstname' onChange={this.handleChange} /> <br/>

                    <label htmlFor='lastname'> Last Name </label>
                    <input type='text' name='lastname' id='lastname' onChange={this.handleChange} /> <br/>

                    <label htmlFor='gender'> Gender </label>
                    <input type='radio' name='gender' value='male' onChange={this.handleChange} /> Male
                    <input type='radio' name='gender' value='female' onChange={this.handleChange} /> Female <br/>

                    <label htmlFor='address'> Address </label>
                    <input type='text' name='address' id='address' onChange={this.handleChange} /> <br/>

                    <label htmlFor='dob'> Date of Birth </label>
                    <input type='date' name='dob' id='dob' onChange={this.handleChange} /> <br/>

                    <input type='submit' />

                </form>
            </div>
        )
    }
}