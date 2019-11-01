import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter : 0,
            error : false
        }
    }

    handleIncrementSubmit = (e) => {
        if (this.state.error)
            this.setState({ error : false})
        this.setState({
            counter : this.state.counter + 1 })
    }

    handleDecrementSubmit = (e) => {
        if (this.state.counter === 0)
            this.setState({ error : true})
        else 
            this.setState({ counter : this.state.counter - 1 })
    }

    render() {

        return (
            <div data-test='component-counter'>
                
                <h1 data-test='counter-display'> Current value of counter is : {this.state.counter} </h1>
                {
                    this.state.error &&
                        <div data-test='error-msg' className='error text-danger'> 
                            The counter value cannot be less than 0 
                        </div>
                }
                
                <button data-test='increment-button' onClick={this.handleIncrementSubmit}> Increment Counter </button>
                <button data-test='decrement-button' onClick={this.handleDecrementSubmit}> Decrement Counter </button>

            </div>
        )
    }
    
}