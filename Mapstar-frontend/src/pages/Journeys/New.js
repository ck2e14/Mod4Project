import React, { Component } from "react";
import Map from './Map.js'
import SearchBar from './SearchBar.js'
import JourneyInformation from './JourneyInformation.js'
// import ExtraInformation from './ExtraInformation'
import Navbar from '../Navbar/Navbar'

const options = ['driving', 'walking', 'bicycling', 'transit']

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
    selectedTransportMode: null,
    // allRoutes: [],
    // history: useHistory()
  }

  handleSubmit = (e, origin, destination) => {
    this.setState({
      setStartpoint: origin,
      setEndpoint: destination,
      driving: null,
      walking: null,
      bicycling: [],
      transit: [],
      selectedTransportMode: null
      // allRoutes: [],
    })
    // this.setState({allRoutes: []})
    options.map((option) => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";

      e.preventDefault()
      
      this.setState({ allRoutes: [] })
      
      fetch(`${proxyurl}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${option}&alternatives=true&key=AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            [option]: data,
            allRoutes: [...this.state.allRoutes, data]
          })
        })
    });
  };

  // ************** HANDLE SELECTED JOURNEY METHODS ******************* //

  handleDrivingSelect = () => {
    this.setState({
      selectedTransportMode: 'DRIVING'
    });
    // added conditional to protect against crashing when API fails to return route information 
      if(this.state.driving != null && this.state.driving.routes.length > 0 ) {
        console.log(this.state.driving)
        debugger;
        fetch("http://localhost:3000/api/v1/journeys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json", 
          },
          body: JSON.stringify({
            startpoint: this.state.setStartpoint,
            endpoint: this.state.setEndpoint,
            duration: this.state.driving.routes[0].legs[0].duration.text,
            distance: this.state.driving.routes[0].legs[0].distance.text,
            transit_mode: 'DRIVING',
            user_id: this.props.user.id
          }
          )
        }
      )
    }
  }

  handleWalkingSelect = () => {
    // here want to .setState to overwrite the selectedTransportMode: of state, and also POST selected journey information to the API.
    // console.log(mode)
    this.setState({
      selectedTransportMode: 'WALKING'
    });
    // added conditional to protect against crashing when API fails to return route information 
    if(this.state.driving != null && this.state.driving.routes.length > 0){
      fetch("http://localhost:3000/api/v1/journeys", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          startpoint: this.state.setStartpoint,
          endpoint: this.state.setEndpoint,
          duration: this.state.walking.routes[0].legs[0].duration.text,
          distance: this.state.walking.routes[0].legs[0].distance.text,
          transit_mode: 'WALKING',
          user_id: this.props.user.id
        }
        )
      }
    )
    }
  }

  handlePublicTransportSelect = () => {
    // here want to .setState to overwrite the selectedTransportMode: of state, and also POST selected journey information to the API.
    // console.log(mode)
    this.setState({
      selectedTransportMode: 'TRANSIT'
    });
    // added conditional to protect against crashing when API fails to return route information 
    if(this.state.driving != null && this.state.driving.routes.length > 0){
      fetch("http://localhost:3000/api/v1/journeys", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          startpoint: this.state.setStartpoint,
          endpoint: this.state.setEndpoint,
          duration: this.state.transit.routes[0].legs[0].duration.text,
          distance: this.state.transit.routes[0].legs[0].distance.text,
          transit_mode: 'TRANSIT',
          user_id: this.props.user.id
        }
        )
      }
    )
    }
  }

  handleCyclingSelect = () => {
    // here want to .setState to overwrite the selectedTransportMode: of state, and also POST selected journey information to the API.
    // console.log(mode)
    this.setState({
      selectedTransportMode: 'BICYCLING'
    });
    // added conditional to protect against crashing when API fails to return route information 
    if(this.driving != null && this.state.driving.route.length > 0){
      fetch("http://localhost:3000/api/v1/journeys", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          startpoint: this.state.setStartpoint,
          endpoint: this.state.setEndpoint,
          duration: this.state.bicycling.routes[0].legs[0].duration.text,
          distance: this.state.bicycling.routes[0].legs[0].distance.text,
          transit_mode: 'BICYLCING',
          user_id: this.props.user.id
        }
        )
      }
    ) 
    }
  }
  //*************END OF HANDLE MODE SELECT METHODS********************//

  render(){
  return (
    <div>

      <div className='ui container'>

        {this.props.user && <Navbar user={this.props.user} logout={this.props.logout}/>}
  
        <div className='ui segment celled grid' id='main-div'>
  
          <div className='row'>

            <div className="eleven wide column">
              <Map origin={this.state.setStartpoint}
                destination={this.state.setEndpoint}
                selectedTransportMode={this.state.selectedTransportMode}/>
            </div>
      
            <div className="five wide column" id='info-div'>
              <JourneyInformation
                driving={this.state.driving}
                walking={this.state.walking}
                bicycling={this.state.bicycling}
                transit={this.state.transit}
                handleDrivingSelect={this.handleDrivingSelect}
                handleWalkingSelect={this .handleWalkingSelect}
                handlePublicTransportSelect={this.handlePublicTransportSelect}
                handleCyclingSelect={this.handleCyclingSelect}
              />
              </div>

            </div>
            
            <SearchBar handleSubmit={this.handleSubmit}/>
          
          </div>    

          {/* <div className="eleven wide column">
            <ExtraInformation />
          </div> */}

        </div>
    
      </div>
    );
  }

};
