import React, { Component } from 'react';


export default class JourneyInformation extends Component {

  getRoutes = () => {
    const allRoutes = this.props.routes
    if (allRoutes.length >= 8) {
      {console.log(allRoutes)}
    }
  }



  render() {
    return (
      <div>
        test
      </div>
    );
  }
}
