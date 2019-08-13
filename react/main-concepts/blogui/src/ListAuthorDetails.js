import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
//import PostsByAuthor from './PostsByAuthor';

class ListAuthorDetails extends React.Component {
    constructor() {
        super()

        this.state = {
            id : '',
            name : '',
            email : '',
            address : '',
            phone : '',
            website : '',
            company : ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        //console.log(id)
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            //console.log(response.data)
            this.setState( {id: response.data.id})
            this.setState( {name: response.data.name})
            this.setState( {email: response.data.email})
            this.setState( {address: response.data.address.city})
            this.setState( {phone: response.data.phone})
            this.setState( {website: response.data.website})
            this.setState( {company: response.data.company.name})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2> Author Details </h2>
                <h3> ID : {this.state.id} </h3>
                <h3> Name : {this.state.name} </h3>
                <h3> Email : {this.state.email} </h3>
                <h3> Address : {this.state.address} </h3>
                <h3> Phone : {this.state.phone} </h3>
                <h3> Website : {this.state.website} </h3>
                <h3> Company : {this.state.company} </h3>

                <Link to={`/author-details/${this.state.id}/posts-by-author`}> Posts by Author </Link> &nbsp;&nbsp;

            </div>
        )
    }
}

export default ListAuthorDetails