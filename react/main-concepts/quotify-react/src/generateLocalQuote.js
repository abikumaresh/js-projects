import React from 'react'

class generateLocalQuote extends React.Component {
    constructor() {
        super()

        this.state = {
            localQuote : {}
        }
    }

    generateLocal() {
        var localQuotesArr = JSON.parse(localStorage.getItem('quotes'))
        const length = localQuotesArr.length
        const random = Math.floor(Math.random()*length)
        console.log(random, length)
        this.setState ( {
            localQuote : localQuotesArr[random]
        })
    }

    componentDidMount() {
        this.generateLocal()
    }

    handleGenRandomLocal = () => {
        this.generateLocal()
    }

    render() {
        return (
            <div> 
                <h4> {this.state.localQuote.quote} </h4>
                <button id='genRandomLocal' onClick={this.handleGenRandomLocal}> Generate Random Quote </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}

export default generateLocalQuote