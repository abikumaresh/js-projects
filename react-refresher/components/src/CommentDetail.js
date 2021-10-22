import React from 'react'

const CommentDetail = (props) => {
    return (
    <div className="comment">
        <div className="avatar">
            <img alt="avatar" src={props.content.avatar}></img>
        </div>
        <div className="content">
            <a href="/" className="author">{props.content.author}</a>
            <div className="metadata">
                <span className="date">{props.content.timeAgo}</span>
            </div>
            <div className="text">{props.content.text}</div>
        </div>
    </div>)
}

export default CommentDetail
