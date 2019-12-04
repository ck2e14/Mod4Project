import React, { Component } from 'react';
import Card from './InfoCard.js'


export default class JourneyInformation extends Component {

  renderInfoCardsForRoutes = (routesArray) => {
    return routesArray.map((route) => <Card route={route} />)
  }


  render() {
    return (
      <div>
        <div>
          <h2>Driving</h2>
          {this.props.driving ? this.renderInfoCardsForRoutes(this.props.driving.routes) : <p>No routes available</p>}
        </div>
        <div>
          <h2>Cycling</h2>
          {this.props.bicycling ? this.renderInfoCardsForRoutes(this.props.bicycling.routes) : <p>No routes available</p>}
        </div>
        <div>
          <h2>Walking</h2>
          {this.props.walking ? this.renderInfoCardsForRoutes(this.props.walking.routes) : <p>No routes available</p>}
        </div>
        <div>
          <h2>Transit</h2>
          {this.props.transit ? this.renderInfoCardsForRoutes(this.props.transit.routes) : <p>No routes available</p>}
        </div>
      </div>
    )
  }
}
