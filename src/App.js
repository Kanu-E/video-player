import React from 'react';
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'

class App extends React.Component {

  state = {videoList: [],
          selectedVideo: ''}

  onSearchSubmit = async term =>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    });
    this.setState({videoList: response.data.items})
  }

  onVideoSelect = (video) =>{
      this.setState({selectedVideo: video})
  }

  render(){
  
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <VideoList videos= {this.state.videoList} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
