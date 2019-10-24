import React from 'react' 
import {registerUser} from '../../actions/user'
import { connect } from 'react-redux'

class Register extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: '',
            email: '', 
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }
        console.log(formData)
        this.props.dispatch(registerUser(formData, this.props))
    }

    render() {
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username 
                        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                    </label> <br/>
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label> <br />

                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label> <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(Register)