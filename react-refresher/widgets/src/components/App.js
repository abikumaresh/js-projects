import React, {useState} from 'react'
//import Accordion from './Accordion'
//import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'

const App = () => {

    const items = [
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

    const options = [
        {
            label : "The brightest one",
            value: "red"
        },
        {   label : "The fresh one",
            value : "green"
        },
        {
            label : "The shade of sky",
            value : "blue"
        },
        {
            label : "Dirty fellow",
            value : "yellow"
        }

    ]

    const [selectedOption, setSelectedOption] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div className="ui container"> 
            <button onClick={()=> setShowDropdown(!showDropdown) }>
                    Toggle Dropdown 
            </button> 
            <br/>
                
            {
                showDropdown ? 
                    <Dropdown 
                        options={options} 
                        selected={selectedOption}
                        onSelectionChange={setSelectedOption} />
                : null
            }
            
        </div>     
    ) 
}

export default App