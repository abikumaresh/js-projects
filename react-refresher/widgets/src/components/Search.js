import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [result, setResult] = useState([])

    useEffect( () => {
        console.log("inside setTime useEffect")
        const timerId = setTimeout( () => {
            console.log("timeout happened ")
            setDebouncedTerm(term)
        }, 2000)

        return () => {
            clearTimeout(timerId )
        }
    }, [term])

    useEffect( () => {
        console.log("Inside UseEffect")
        const searchResult = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : debouncedTerm
                }
            })
            console.log(data.query.search)
            setResult(data.query.search)
        }
        searchResult()
               
    }, [debouncedTerm]) 

    const onTermChange = (event) => {
        setTerm(event.target.value)
        console.log(event.target.value)
    }

    const renderedResult = result.map( result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}>                        
                    </span>
                </div>
            </div>
        )
    })

    return (<div>
        <div className="ui form">
            <div className="field">
                <label>Enter search term </label>
                <input type="text" 
                    value={term}
                    onChange={onTermChange}/>
            </div>
        </div>
        <div className="ui celled list">
            {renderedResult}
        </div>
    </div>

    )

}

export default Search