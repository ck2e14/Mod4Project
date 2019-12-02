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


  onformSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    // this.props.handleSubmit(this.state.term)
  }

  render(){
    return(
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={(e) => this.onformSubmit(e)}>
          <div className='field'>
            <label>Plan your journey!</label>
              <input
                placeholder="Origin"
                value={this.state.origin}
                onChange={this.onOriginChange}
                />
                <input
                  placeholder="Destination"
                  value={this.state.destination}
                  onChange={this.onDestinationChange}
                  />
                <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar


//AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I
