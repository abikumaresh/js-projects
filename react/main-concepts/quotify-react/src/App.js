import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import generateRandomQuote from './generateRandomQuote'
import generateLocalQuote from './generateLocalQuote'
import addNewQuote from './addNewQuote'
import listAllQuotes from './listAllQuotes'

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <h2> Random Quote Generator </h2>

        <Link to='/generate-random-quote' > Random Quote (API) </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/generate-local-quote' > Random Quote (Local) </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/add-new-quote' > Add New Quote </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/list-all-quotes' >List All Quotes (Local) </Link> 

        <Route path='/generate-random-quote' component={generateRandomQuote} />
        <Route path='/generate-local-quote' component={generateLocalQuote} />
        <Route path='/add-new-quote' component={addNewQuote} />
        <Route path='/list-all-quotes' component={listAllQuotes} />

      </BrowserRouter>
    </div>
  )
}

export default App
