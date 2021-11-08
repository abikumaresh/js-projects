import React from 'react'

class SearchBar extends React.Component {
    state = { term : ''}

    onChange = (e) => {
        this.setState({term : e.target.value})
        console.log(e.target.value)
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form" style={{backgroundColor : 'red'}} onSubmit={this.onFormSubmit}>
                <div className="ui content">
                    <label>
                        <b>Video Search</b>
                    </label>
                    <input type="text"
                        value={this.state.term}
                        onChange={this.onChange}/>
                </div>
            </form>    
        </div>)
    }
}

export default SearchBar