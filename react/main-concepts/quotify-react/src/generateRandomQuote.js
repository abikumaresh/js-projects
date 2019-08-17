import React from 'react'
import axios from 'axios';

class generateRandomQuote extends React.Component {
    constructor() {
        super()

        this.state = {
            randomQuote : ''
        }
    }

    generateRandom() {
        axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random') 
        .then(response => {
            //console.log(response.data.message)
            this.setState( {randomQuote : response.data.message} )
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        //console.log('in component mount')
        this.generateRandom()        
    }

    handleGenRandom = () => {
        this.generateRandom()
    }

    handleSaveToLocal = (e) => {
        //console.log(JSON.parse(localStorage.getItem('quotes')))
        var localQuotesArr = []
        var quote = {}

        if (JSON.parse(localStorage.getItem('quotes'))) {
            localQuotesArr = JSON.parse(localStorage.getItem('quotes'))
            console.log(localQuotesArr.length)
            quote.id = localQuotesArr.length + 1
            quote.quote = this.state.randomQuote
            localQuotesArr.push(quote)
            localStorage.setItem('quotes', JSON.stringify(localQuotesArr))
        } else {
            //console.log(this.state.randomQuote )
            quote.id = 1
            quote.quote = this.state.randomQuote
            localQuotesArr.push(quote)
            localStorage.setItem('quotes', JSON.stringify(localQuotesArr))
        }
        e.target.textContent = 'Saved Locally'
    }


    render() {
        return (
            <div>
                <h4> {this.state.randomQuote} </h4>
                <button id='genRandom' onClick={this.handleGenRandom}> Generate Random Quote </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button id='saveLocal' onClick={this.handleSaveToLocal}> Save to Local</button>
            </div>
        )
    }
}

export default generateRandomQuote