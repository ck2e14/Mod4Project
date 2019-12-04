import React, { Component } from "react";
import API from "../../adapters/API";
import MapContainer from './Map.js'
import SearchBar from './SearchBar.js'
import JourneyInformation from './JourneyInformation.js'
import ExtraInformation from './ExtraInformation'
import Navbar from '../Navbar/Navbar'
// import { useHistory } from "react-router-dom";

export default class NewJourney extends Component {

  state={
    title: '',
    setStartpoint: '',
    content: '',
    setEndpoint: ''
    // history: useHistory()
  }

   handleSubmit = (origin, destination) => {
    console.log(origin, destination)
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
                <MapContainer />
                </div>
                <div className="five wide column">
                <JourneyInformation />

                </div>
                <div className="ui row">
                  <div className="eleven wide column">
                  <ExtraInformation />
                </div>
                </div>
                </div>
                {this.props.user ? <button onClick={this.props.logout}>Log Out</button> : null }
              </div>
        </div>
      </div>
  );
}
};


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
