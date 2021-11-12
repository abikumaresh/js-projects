import React from 'react'
//import Accordion from './Accordion'
import Search from './Search'

class App extends React.Component {

    items = [
        {
            title : "What is React ?",
            content : "React is a front end library"
        },
        {
            title : "What is special is React",
            content : "All elements are implemented as components"
        },
        {
            title : "What is special about React components",
            content : "Components help in reusuable code"
        }
    ]

    render() {
        return (
            <div className="ui container"> 
                <Search />
            </div>
        )
    }
}

export default App