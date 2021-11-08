import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {

    state = {lat: null, errorMessage: null}
 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                this.setState( {lat : position.coords.latitude})
            },
            err => {
                console.log(err)
                this.setState({errorMessage: err.message})
            }
        )
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <div> <SeasonDisplay lat={this.state.lat} /></div>
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div> Error : {this.state.errorMessage} </div>
        }

        return <Spinner message="Give permission to location app.."/>
    }

    render () {
        return this.renderContent()
    }      
}

ReactDOM.render(
    <App />, document.getElementById('root')
)