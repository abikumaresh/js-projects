import React from 'react'
import { Link } from 'react-router-dom'

function PostItem(props) {    
    return (
            <div> 
                <Link to={`/list-post-details/${props.id}`}> {props.title} </Link>
            </div>        
    )
}

export default PostItem
