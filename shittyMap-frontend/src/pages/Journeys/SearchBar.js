import React from 'react'

class SearchBar extends React.Component{
  state = {
    origin: '',
    destination: ''
  }

  onOriginChange = (event) =>{
    this.setState({origin: event.target.value})
    console.log(this.state.origin)

  }
  onDestinationChange = (event) =>{
    this.setState({destination: event.target.value})
    console.log(this.state.destination)
  }


  // onformSubmit = (e) =>{
  //  e.preventDefault()
  //  fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${this.state.destination}&key=IzaSyA4KsBwrhZbB_bnjtmZi1x67YTMMWmtQuU`)
  //     .then(res => res.json())
  //     .then(thing => console.log(thing))
  // //  this.props.handleSubmit(this.state.origin, this.state.destination)
  // }

  render(){
    return(
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={(e) => this.props.handleSubmit(e, this.state.origin, this.state.destination)}>
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
