import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return <div>
        <ApprovalCard>
            <CommentDetail content={ {"author":"Sam", "timeAgo": "Today at 6am", "text":"Nice post", "avatar": faker.image.avatar() } }/>
            <CommentDetail content={ {"author":"Peter","timeAgo":"Yesterday at 6am", "text":"Good one", "avatar": faker.image.avatar() }}/>
        </ApprovalCard>
    </div>
}

ReactDOM.render(
    <App />, document.getElementById('root')
)