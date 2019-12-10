import React from 'react';

const Card = props => {
  const { route } = props;
  const information = props.route.legs[0]

  return (
    <div className='ui card'>
      <p>
        Start: {information.start_address} <br />
        End: {information.end_address} <br />
        Distance: {information.distance.text} <br />
        Duration: {information.duration.text}
      </p>
      <button>See More</button>
      <button>Start Journey</button>
    </div>
  )




}



export default Card;
