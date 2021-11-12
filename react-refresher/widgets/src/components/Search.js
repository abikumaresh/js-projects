import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('')

    useEffect( () => {
        console.log("Inside UseEffect")
        const searchResult = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term
                }
            })
        }
        searchResult()
        console.log(searchResult)
    }, [term]) 

    const onTermChange = (event) => {
        setTerm(event.target.value)
        console.log(event.target.value)
    }

    return <div className="ui form">
        <div className="field">
            <label>Enter search term </label>
            <input type="text" 
                value={term}
                onChange={onTermChange}/>
        </div>
    </div>

}

export default Search