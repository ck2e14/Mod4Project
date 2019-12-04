import React, { Component } from 'react';
import Card from './InfoCard.js'


export default class JourneyInformation extends Component {

  renderInfoCardsForRoutes = (routesArray) => {
    if(routesArray !== []){
      if(routesArray === undefined){
          console.log('broken ass stuff')
      }else{
      return routesArray.map((route) => <Card route={route} />)
      }
    }else{
      console.log('goodbye')
    }
    //
  }


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
