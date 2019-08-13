import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostsByAuthor extends React.Component {
    constructor() {
        super()

        this.state = {
            postsByAuthor : []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => {
            console.log(response.data)
            this.setState(() => {
                return { postsByAuthor : [].concat(response.data) }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.postsByAuthor.map ( post => {
                            return (
                                <li key={post.id}> <Link to={`/list-post-details/${post.id}`}> {post.title} </Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PostsByAuthor