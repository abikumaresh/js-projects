import React from 'react'
import Axios from '../../config/axios'
import {Link} from 'react-router-dom'

export default class EmployeeGroupNew extends React.Component {
    
    constructor() {
        super()

        this.state = {
            name : '',
            grouplist : []
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState( {
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            'name' : this.state.name
        }
        console.log(formData)
        Axios.post('/employeegroups', formData)
        .then(response => {
            Axios.get('/employeegroups')
            .then (response => {
                console.log(response.data)
                const grouplist = response.data
                this.setState( {grouplist})
            })
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <br/> <label htmlFor='name' > Group Name : </label>
                    <input type='text' name='name' id='name' value={this.state.name}
                                onChange={this.handleChange} /> <br/>

                    <input type='submit'/>
                </form>

                {this.state.grouplist.length > 0 && (
                    <div>
                    <h3> List of Employee Groups - {this.state.grouplist.length} </h3>
                    <ul>
                        {
                            this.state.grouplist.map( group => {
                                return <li key={group._id}> { group.name} </li>
                            })
                        }
                    </ul>
                    </div>
                )} 

                <br/><Link to='/employees' > Back </Link>

            </div>
        )
    }
}