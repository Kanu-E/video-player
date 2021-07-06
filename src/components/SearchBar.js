import React from 'react'

class SearchBar extends React.Component{

        state = {searchTerm: ''}

        onHandleChange=(event)=>{
            this.setState({searchTerm: event.target.value})
        }

        onHandleSubmit=(event)=>{
            event.preventDefault()
            
        }
        render(){
  
            return(
                <div className= "search-bar ui segment">
                    <form className= "ui form" onSubmit={this.onHandleSubmit}>
                       <div className= "field">
                       <label>Video Search</label>
                        <input type='text' value={this.state.searchTerm} 
                        onChange={this.onHandleChange}/>
                       </div>
                        <input type='submit'/>
                    </form>
                </div>
            )
        }
}

export default SearchBar