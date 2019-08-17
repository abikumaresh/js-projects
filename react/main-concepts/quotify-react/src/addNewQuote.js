import React from 'react'

class addNewQuote extends React.Component {
    constructor() {
        super()

        this.state = {
            quote : ''
        }
    }

    handleChange = (e) => {
        const quote = e.target.value
        this.setState ( { quote })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var localQuotesArr = []
        var quote = {}

        if (JSON.parse(localStorage.getItem('quotes'))) {
            localQuotesArr = JSON.parse(localStorage.getItem('quotes'))
            quote.id = localQuotesArr.length + 1
            quote.quote = this.state.quote
            localQuotesArr.push(quote)
            localStorage.setItem('quotes', JSON.stringify(localQuotesArr))
        } else {
            quote.id = 1
            quote.quote = this.state.quote
            localQuotesArr.push(quote)
            localStorage.setItem('quotes', JSON.stringify(localQuotesArr))
        }
        window.confirm('Quote Saved to LocalStorage')

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} > <br/>
                <label> Add a New Quote <br/>
                    <textarea rows='20' cols='50' onChange={this.handleChange} />                    
                </label> <br/>
                <input type='submit' value='Create new Quote' />
                
                </form>
            </div>
        )
    }

}

export default addNewQuote