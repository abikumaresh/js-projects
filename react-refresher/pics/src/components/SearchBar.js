import React from 'react'

class SearchBar extends React.Component {
    state = {term : ''}

    onChange = (event) => {
        console.log(event.target.value)
        this.setState({term : event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="ui field">
                    <label className="ui label">Search for Image</label>
                    <input type="text"
                            value={this.state.term} 
                            onChange={this.onChange}
                    />
                </div>       
            </form>            
        </div>)
    }
}

export default SearchBar