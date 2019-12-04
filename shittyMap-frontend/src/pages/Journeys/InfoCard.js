import React from 'react';

const Card = props => {

  const { route } = props;

  const information = props.route.legs[0]

  console.log(information)

  return (
    <div>
      <p>
        Distance: {information.distance.text} <br/>
        Duration: {information.duration.text}
      </p> 


    </div>
  )




}



export default Card;