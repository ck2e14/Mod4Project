import React from 'react'

class SearchBar extends React.Component{
  state = {
    origin: '',
    destination: ''
  }

  onOriginChange = (event) =>{
    this.setState({origin: event.target.value})
  }

  onDestinationChange = (event) =>{
    this.setState({destination: event.target.value})
  }

  render(){
    return(
      <div className='search-bar-ui-segment'>

        <form className='ui form' onSubmit={(e) => this.props.handleSubmit(e, this.state.origin, this.state.destination)}>
        
          <div className='field'>
        
            <label className='field-label'>Plan your journey!</label>
        
                <input
                className='inputs'
                placeholder="Origin"
                value={this.state.origin}
                onChange={this.onOriginChange}
                />
        
                <input
                className='inputs'
                  placeholder="Destination"
                  value={this.state.destination}
                  onChange={this.onDestinationChange}
                />

              <input className='submit-or-select' type="submit" />
          </div>

        </form>

      </div>
    )
  }
}

export default SearchBar


//AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I
