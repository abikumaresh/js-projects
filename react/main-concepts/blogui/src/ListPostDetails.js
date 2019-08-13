import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class ListPostDetails extends React.Component {
    constructor() {
        super()

        this.state = {
            postId : '',
            postTitle : '',
            postBody : '',
            author : '',
            authorId : '',
            postComments : []         
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.setState ( { postId : id } )
        //console.log(this.state.postId)

        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            //console.log(response.data)
            this.setState( {postTitle : response.data.title} )
            this.setState( {postBody : response.data.body} )
            this.setState( {authorId : response.data.userId} )
            //console.log(this.state.postTitle)
            axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${this.state.postId}`)
            .then(resp => {
                //console.log(resp.data)
                this.setState( () => {
                    return { 
                        postComments : [].concat(resp.data)} 
                
                })
            })
            axios.get(`http://jsonplaceholder.typicode.com/users/${this.state.authorId}`)
            .then(resp => {
                console.log(resp.data.name)
                this.setState( {
                    author : resp.data.name
                })
            })
        })        
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2> Post Details </h2>
                <h3> Title : {this.state.postTitle} </h3>
                <h3> Author : <Link to={`/author-details/${this.state.authorId}`}> {this.state.author} </Link> </h3>
                <h3> Post Content : <br/> {this.state.postBody} </h3>
                <h3> Listing Comments </h3>
                <ul>
                    {
                        this.state.postComments.map( (comment) => {
                            return (
                            <li key={comment.id}>
                                <h5> Name : {comment.name} </h5>
                                <h5> Email : {comment.email} </h5>
                                <h5> Comment : {comment.body} </h5> <hr/>
                            </li> )
                            
                        })
                    }
                </ul> 
            </div>
        )
    }
}

export default ListPostDetails