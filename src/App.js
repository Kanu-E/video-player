import React from 'react';
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'

class App extends React.Component {

  sta

  onSearchSubmit = async term =>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    });
    this.setState({searchTerm: response.data.items})
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        I have {this.state.searchTerm.length} Videos
      </div>
    );
  }
}

export default App;
