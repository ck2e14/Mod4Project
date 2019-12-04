import React, { Component } from 'react';


export default class JourneyInformation extends Component {
  render() {

    
    return (
      <div>
        <button onClick={() => this.props.handleDrivingSelect ('DRIVING')}>Choose Driving</button>
        <br></br>
        <button onClick={() => this.props.handleSelectedModeClick('WALKING')}>Choose Walking</button>
        <br></br>
        <button onClick={() => this.props.handleSelectedModeClick('TRANSIT')}>Choose Public Tranport</button>
        <br></br>
        <button onClick={() => this.props.handleSelectedModeClick('BICYCLING')}>Choose Cycling</button>
        <br></br>
      </div>
    );
  }
}
