import React from 'react';
import API from "../../adapters/API";


const JourneyDisplay = (props) => {
   return(
      <div>
         <p>{props.journey.startpoint} </p>
      </div>
   )
}

export default JourneyDisplay