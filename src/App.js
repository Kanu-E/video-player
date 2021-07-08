import React from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'


class App extends React.Component {

  state = {videoList: [],
          selectedVideo: ''
        }

  componentDidMount() {
    this.onSearchSubmit('funny videos')
  }

  onSearchSubmit = async term =>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    });
    this.setState({
      videoList: response.data.items,
    selectedVideo: response.data.items[0]})
  }

  onVideoSelect = (video) =>{
      this.setState({selectedVideo: video})
  }

  render(){
  
    return (
      <div className=" App ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className= "ui row">
              <div className="eleven wide column">
                <VideoDetail video = {this.state.selectedVideo}/>
              </div>
              <div className="four wide column">
              <VideoList videos= {this.state.videoList} onVideoSelect={this.onVideoSelect}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
