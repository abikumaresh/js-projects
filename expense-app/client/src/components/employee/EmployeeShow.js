import React from 'react'
import Axios from '../../config/axios'
import { Link } from 'react-router-dom'

export default class EmployeeShow extends React.Component {
    constructor() {
        super()

        this.state = {
            name : '',
            email : '',
            address : '',
            group : '',
            role : ''
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        Axios.get(`/employees/${id}`)
        .then( response => {
            console.log(response.data.group.name)
            const { name, email, address, role } = response.data
            const { name : group} = response.data.group
            this.setState({id, name, email, address, group, role})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {
                        <div>
                            <h2> Employee details </h2>
                            <h3> Name : {this.state.name} </h3>
                            <h3> Email : {this.state.email} </h3>
                            <h3> Group : {this.state.group} </h3>
                            <h3> Address : {this.state.address} </h3>
                            <h3> Role : {this.state.role} </h3> <br/>
                            <Link to='/employees'> Back </Link>
                        </div>
                }

            </div>
        )
    }
}