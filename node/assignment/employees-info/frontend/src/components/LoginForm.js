import React from 'react'
import Axios from '../config/axios'
import ShowError from '../config/ShowError'

export default class LoginForm extends React.Component {
    constructor() {
        super()

        this.state = {
            username : '',
            password : '',
            error : ''
        }
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Handle Submit')
        const formData = {
            'username' : this.state.username,
            'password' : this.state.password
        }
        Axios.post('/login', formData)
        .then (response => {
            console.log(response.data.status)
            if (response.data.status === 'error') {
                this.setState({
                    error : response.data.notice
                })
            }
            else {
                this.props.history.push('/employees/home')
            }
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3> Enter credentials to login </h3> 
                    {
                        this.state.error && 
                            <ShowError error={this.state.error} />
                    }
                                       
                    <label htmlFor='username' > Username </label>
                    <input type='text' name='username' id='username' onChange={this.handleChange} /> <br/>

                    <label htmlFor='password' > Password </label>
                    <input type='password' name='password' id='password' onChange={this.handleChange} /> <br />

                    <input type='submit' />
                </form>
            </div>
        )
    }
 }