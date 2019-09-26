import React from 'react'
import Axios from '../../config/axios'

export default class NewEmployeeForm extends React.Component {
    constructor() {
        super() 

        this.state = {
            name : '',
            email : '',
            groupslist : [],
            group : '',
            address : '',
            rolelist : [],
            role : ''
        }
    }

    componentDidMount = () => {
        Axios.get('/employeegroups')
        .then(response => {
            console.log(response.data.groups)
            const groupslist = response.data
            this.setState( {groupslist} )
        })
        Axios.get('/employeeroles')
        .then(response => {
            console.log(response.data.roles)
            const rolelist = response.data.roles
            this.setState( {rolelist} )
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState( {
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData =  {
            'name' : this.state.name,
            'email' : this.state.email,
            'group' : this.state.group,
            'address' : this.state.address,
            'role' : this.state.role
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <br/> <label htmlFor='name' > Name : </label>
                    <input type='text' name='name' id='name' value={this.state.name}
                                onChange={this.handleChange} /> <br/>

                    <label htmlFor='email' > Email : </label>
                    <input type='text' name='email' id='email' value={this.state.email} 
                                onChange={this.handleChange} /> <br/>

                    <label htmlFor='group' > Group : </label>
                    <select name='group' id='group' onChange={this.handleChange}> 
                    {
                        this.state.groupslist.map( group => {
                            return <option key={group._id} value={group._id} > {group.name} </option>
                        })
                    }
                    </select> <br/>

                    <label htmlFor='address' > Address : </label>
                    <input type='text' name='address' id='address' value={this.state.address} 
                                onChange={this.handleChange} /> <br/>

                    <label htmlFor='role' > Role : </label>
                    <select name='role' id='role' onChange={this.handleChange}> 
                    {
                        this.state.rolelist.map( role => {
                            return <option key={role} > {role} </option>
                        })
                    }
                    </select><br/>

                    <input type='submit'/>

                </form>
            </div>
        )
    }
}