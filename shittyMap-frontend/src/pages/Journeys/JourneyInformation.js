import React, { Component } from 'react';
import Card from './InfoCard.js'


export default class JourneyInformation extends Component {

  renderInfoCardsForRoutes = (routesArray) => {
    if(routesArray !== []){
      if(routesArray === undefined){
      }else{
      return routesArray.map((route, index) => <Card route={route} id={index}/>)
      }
    }else{
    }
  }

  render() {
    return (
      <div>
      {this.props.driving ?  <button onClick={() => this.props.handleDrivingSelect ('DRIVING')}>Choose Driving</button> : null}
        <br></br>
        {this.props.bicycling ? <button onClick={() => this.props.handleSelectedModeClick('WALKING')}>Choose Walking</button> : null}
        <br></br>
      {this.props.walking ?  <button onClick={() => this.props.handleSelectedModeClick('TRANSIT')}>Choose Public Tranport</button> : null}
        <br></br>
      {this.props.transit ?  <button onClick={() => this.props.handleSelectedModeClick('BICYCLING')}>Choose Cycling</button>: null}
        <br></br>
        <div>
          {this.props.driving ? <h2>Driving</h2> : <h1>Search to see details!</h1>}
          {this.props.driving ? this.renderInfoCardsForRoutes(this.props.driving.routes) : null}
        </div>
        <div>
        {this.props.bicycling ?  <h2>Cycling</h2> : null}
          {this.props.bicycling ? this.renderInfoCardsForRoutes(this.props.bicycling.routes) : null}
        </div>
        <div>
        {this.props.walking ?   <h2>Walking</h2> : null}
          {this.props.walking ? this.renderInfoCardsForRoutes(this.props.walking.routes) : null}
        </div>
        <div>
        {this.props.transit ?  <h2>Transit</h2> : null}
          {this.props.transit ? this.renderInfoCardsForRoutes(this.props.transit.routes) : null}
        </div>
      </div>
    )
  }
}
