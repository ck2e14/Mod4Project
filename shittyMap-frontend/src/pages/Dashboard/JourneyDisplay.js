import React from 'react';
import API from "../../adapters/API";


const JourneyDisplay = (props) => {
   return(
      <div>
         <h5>---------------------</h5>
         <p><strong>Origin: </strong>{props.journey.startpoint} </p>
         <p><strong>Destination: </strong>{props.journey.endpoint}</p>
         <p><strong>Duration: </strong>{props.journey.duration}</p>
         <p><strong>Distance: </strong>{props.journey.distance}</p>
         <p><strong>Transport Type: </strong>{props.journey.transit_mode   }</p>
      </div>
   )
}

export default JourneyDisplay