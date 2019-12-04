import React, { Component } from "react";
import API from "../../adapters/API";
import MapContainer from './Map.js'
import SearchBar from './SearchBar.js'
import JourneyInformation from './JourneyInformation.js'
import ExtraInformation from './ExtraInformation'
import Navbar from '../Navbar/Navbar'
// import { useHistory } from "react-router-dom";



const options = ['driving', 'walking', 'bicycling', 'transit']

// fetch(`${''}https://maps.googleapis.com/maps/api/directions/json?origin=${'London'}&destination=${'Bristol'}&key=AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I`)
//   .then(res => res.json())
//   .then(thing => console.log(thing))
export default class NewJourney extends Component {

  state = {
    title: '',
    setStartpoint: '',
    content: '',
    setEndpoint: '',
    driving: null,
    walking: null,
    bicycling: null,
    transit: null,
    // allRoutes: [],
    // history: useHistory()
  }

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  handleSubmit = (e, origin, destination) => {
    this.setState({
      setStartpoint: origin,
      setEndpoint: destination,
      driving: [],
      walking: [],
      bicycling: [],
      transit: [],
      // allRoutes: [],
    })
    // this.setState({allRoutes: []})
    options.map((option) => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      e.preventDefault()
      fetch(`${proxyurl}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${option}&alternatives=true&key=AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I`)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => {
          this.setState({
            [option]: data
          })
        }
      )
    });

  };

  //   // iterate through this.state.allRoutes and save the index of the object that matches the driving conditions (no warnings).
  //   // then save the object that is at that index from this.state.allRoutes to a variable. Then access that variable in a POST fetch that then persists the relevant keys' values. 

  //   const index = this.state.allRoutes.findIndex(x=> x.routes[0].warnings === [])


  // }



  render(){
  return (
    <div>
      {this.props.user && <Navbar />}
      <br></br>
      <br></br>
        <div className='ui container'>
          <SearchBar handleSubmit={this.handleSubmit}/>
            <div className='ui celled grid'>
              <div className='ui row'>

            <div className="eleven wide column">
              <MapContainer origin={this.state.setStartpoint} destination={this.state.setEnd}/>
            </div>
            <div className="five wide column">
              <JourneyInformation 
                driving={this.state.driving}
                walking={this.state.walking}
                bicycling={this.state.bicycling}
                transit={this.state.transit}
                // routes={this.state.allRoutes}
              />

            </div>
            <div className="ui row">

              <div className="eleven wide column">
                <ExtraInformation />
              </div>
            </div>
          </div>
          {this.props.user ? <button onClick={this.props.logout}>Log Out</button> : null}
        </div>
      </div>
 </div>
  );
}

};