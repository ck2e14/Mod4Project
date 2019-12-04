import React, { Component } from 'react';
import JourneyCard from './JourneyCard'


export default class JourneyInformation extends Component {

  state = {
    cunt: []
  }

  getResults = () => {
    const allRoutes = this.props.routes
    if (allRoutes.length >= 8) {
      { allRoutes.forEach(this.getRoutes) }
    }
  }

  getRoutes = (result) => {
    if (typeof result === 'object'){
      result.routes.forEach(this.getRouteInfo)
    } 
  }

  getRouteInfo = (route) => {
    this.setState({
      cunt: [...this.state.cunt, route.legs[0]]
    })
  }



  render() {
    // console.log(this.props)
    return (
      <div>

        {this.getResults()}
        <JourneyCard  info={this.state.cunt}/>

      </div>
    );
  }
}
