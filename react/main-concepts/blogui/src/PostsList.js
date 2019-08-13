import React from 'react'
import PostItem from './PostItem'
import axios from 'axios';

class PostsList extends React.Component {

    constructor() {
        super()

        this.state = {  
            posts : []
        }
    }

    componentDidMount() {
        console.log('in component did mount')
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //console.log(response.data)
            this.setState( () => {
                return {
                    posts : [].concat(response.data)
                }
            })
        })
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        console.log('in render')
        return (
            <div>
                <h2> Listing all Posts </h2>
                <ul>
                    {
                        this.state.posts.map( post => {
                            //console.log(post.title)
                            return <PostItem key={post.id} id={post.id} title={post.title} />
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default PostsList