import React from 'react'

class QuoteItem extends React.Component {
    constructor() {
        super()

        this.state = {
            localQuotesArr : []
        }

    }

    componentDidMount() {
        var quotesArr = JSON.parse(localStorage.getItem('quotes'))

        this.setState ( {
            localQuotesArr : quotesArr
        }) 
    }

    

    render() {
        return (
            <tr>
                <td>{this.props.quote}</td> 
                <td>
                    <button id={this.props.id} onClick={this.handleEditClick}> Edit </button> 
                    <button id={this.props.id} onClick={this.handleDeleteClick} > Delete </button>
                </td>
            </tr> 
        )
    }
}


export default QuoteItem