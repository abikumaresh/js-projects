import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetails'

class App extends React.Component {

    state = {videos : [], selectedVideo : null}

    // Set default video as first video of search list
    componentDidMount() {
        this.onSubmit("lily")
    }

    onSubmit = async (term) => {
        console.log(term)
        const response = await youtube.get('/search', {
            params : {
                q: term
            }
        })
        console.log(response.data.items)
        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]})
    }

    onVideoSelect = video => {
        console.log('From the app ---> ', video)
        this.setState({selectedVideo : video})
    }

    render() {
        return <div className="ui container"> 
            <SearchBar onSubmit={this.onSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>                
            </div>            
        </div>
    }
}

export default App