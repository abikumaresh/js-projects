import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class AuthorsList extends React.Component {
    constructor() {
        super()

        this.state = {
            authors : []
        }
    }

    componentDidMount() {
        console.log('Authors List Component Mount')
        axios.get('http://jsonplaceholder.typicode.com/users') 
        .then(response => {
            console.log(response.data)
            this.setState ( () => {
                return { authors : [].concat(response.data) }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>
                <h2> List of All Authors</h2>
                <ul>
                    {
                        this.state.authors.map ( author => {
                            return ( <li key={author.id}>
                                <Link to={`author-details/${author.id}`} >{author.name} </Link> <br/>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default AuthorsList