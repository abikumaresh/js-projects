import React from 'react'

class listAllQuotes extends React.Component {
    constructor() {
        super()
        
        this.state = {
            localQuotesArr : [],
            quoteToDelete : '',
            updatedQuote : ''
        }
    }

    componentDidMount() {
        var quotesArr = JSON.parse(localStorage.getItem('quotes'))

        this.setState ( {
            localQuotesArr : quotesArr
        })        
    }

    handleEditClick = (e) => {
        console.log('in edit ...')
        this.setState ( {quoteToDelete : ''})
        const id = e.target.id
        console.log(id)
        this.setState({quoteToDelete : id})
    }

    handleDeleteClick = (e) => {
        const id = e.target.id
        console.log(id)

        let localQuote = this.state.localQuotesArr
        localQuote.splice(id-1,1)        

        for (let i=0; i< localQuote.length; i++) {
            localQuote[i].id = i+1
        }

        this.setState( {
            localQuotesArr : localQuote
        })

        localStorage.setItem('quotes', JSON.stringify(this.state.localQuotesArr))


    }

    handleUpdateClick = (e) => {
        //const id = e.target.id
        //let localQuote = this.state.localQuotesArr
        console.log(this.state.updatedQuote)


    }

    handleUpdateChange = (e) => {
        e.preventDefault()
        this.setState( { updatedQuote : e.target.value } )
        e.target.textContent = this.state.updatedQuote
    }

    handleUpdateFocus = (e) => {
        this.setState( {updatedQuote : e.target.value})
    }

    render() {

        console.log('in render.....')
        console.log(this.state.quoteToDelete)
        
        return (
            <div>
                <table border='1'><tbody>
                    {
                        this.state.localQuotesArr.map( quote => {      
                            return (
                                <div>
                                { (this.state.quoteToDelete === String(quote.id)) ? (   
                                    <tr key={quote.id}>
                                        <td > 
                                            <form onSubmit={this.handleUpdateClick} >
                                                <label> Update your quote <br/>
                                                    <textarea rows='10' cols='10' value={this.state.updatedQuote} onChange={this.handleUpdateChange} onFocus={ () => {
                                                        this.handleUpdateFocus(quote.quote)}} />
                                                </label>
                                                <input type='submit' value='Update' /> 
                                            </form>
                                        </td>                                        
                                   </tr>
                                ) : (
                                    <tr key={quote.id}>
                                        <td > { quote.quote} </td>                                    
                                        <td >
                                            <button id={quote.id} onClick={this.handleEditClick}> Edit </button> 
                                            <button id={quote.id} onClick={this.handleDeleteClick}> Delete </button> 
                                        </td>
                                    </tr>
                                )  } 
                                
                                </div>                      
                            )       
                        })
                    }
                </tbody></table>
            </div>
        )
    }

}

export default listAllQuotes