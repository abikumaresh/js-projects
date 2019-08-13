import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import PostsList from './PostsList'
import AuthorsList from './AuthorsList'

import ListPostDetails from './ListPostDetails'
import ListAuthorDetails from './ListAuthorDetails'
import PostsByAuthor from './PostsByAuthor'

function App(props) {
    return (
        <div>
            <BrowserRouter>

                <Link to='/all-posts'> Posts</Link> &nbsp;&nbsp;
                <Link to='/all-authors'>Authors </Link>

                <Route path='/all-posts' component={PostsList} />
                <Route path='/all-authors' component={AuthorsList} />

                <Route path='/list-post-details/:id' component={ListPostDetails} />
                <Route path='/author-details/:id' component={ListAuthorDetails} />
                <Route path='/author-details/:id/posts-by-author' component={PostsByAuthor} />
            
            </BrowserRouter>
        </div>
    )
}

export default App