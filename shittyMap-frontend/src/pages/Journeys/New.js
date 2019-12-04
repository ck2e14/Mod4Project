import React, { Component } from "react";
import API from "../../adapters/API";
import MapContainer from './Map.js'
import SearchBar from './SearchBar.js'
import JourneyInformation from './JourneyInformation.js'
import ExtraInformation from './ExtraInformation'
import Navbar from '../Navbar/Navbar'
// import { useHistory } from "react-router-dom";



const options = ['driving', 'walking', 'bicycling', 'transit']

fetch(`${''}https://maps.googleapis.com/maps/api/directions/json?origin=${'London'}&destination=${'Bristol'}&key=AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I`)
  .then(res => res.json())
  .then(thing => console.log(thing))
export default class NewJourney extends Component {

  state = {
    title: '',
    setStartpoint: '',
    content: '',
    setEndpoint: '',
    allRoutes: []
    // history: useHistory()
  }

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  handleSubmit = (e, origin, destination) => {
    this.setState({
      setStartpoint: origin,
      setEndpoint: destination
    })
  options.map((option,i) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    e.preventDefault()
    this.setState({allRoutes: []})
    fetch(`${proxyurl}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${option}&alternatives=true&key=AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          allRoutes: [...this.state.allRoutes, data, option]
        })
      }
    )
   });

  };



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
              <JourneyInformation routes={this.state.allRoutes}/>

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

  );
}

};



  // handleSubmit = (e, origin, destination) => {
  //   const options = []
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   e.preventDefault()
  //   fetch(`${proxyurl}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyC46mxowyyPzXCDudxz8BO2YiTJkKs9M9I`)
  //     .then(res => res.json())
  //     .then(thing => options.push(thing))

  //   console.log(options)

  // };


// onFormSubmit={this.onTermSubmit}


// import React, { useState } from "react";
// import API from "../../adapters/API";
// import Map from './Map.js'
// import SearchBar from './SearchBar.js'
// import JourneyInformation from './JourneyInformation.js'
// import ExtraInformation from './ExtraInformation'
//
//
// import { useHistory } from "react-router-dom";
//
// const NewJourney = props => {
//
//   const [title, setStartpoint] = useState("");
//   const [content, setEndpoint] = useState("");
//   const history = useHistory();
//
//   const handleSubmit = e => {
//     e.preventDefault();
//     API.postJourney({ title, content }).then(journey => {
//       history.push(`/journey/${journey.id}`);
//     });
//     setStartpoint("");
//     setEndpoint("");
//   };
//   return (
//     <div className='ui container'>
//           <SearchBar />
//             <div className='ui grid'>
//               <div className='ui row'>
//               <div className="eleven wide column">
//                 <Map />
//                 </div>
//                 <div className="five wide column">
//                 <JourneyInformation />
//                 </div>
//                 <ExtraInformation />
//                 </div>
//               </div>
//         </div>
//   );
// };
//
// export default NewJourney;
