import React, { Component } from 'react';
import Card from './InfoCard.js'

export default class JourneyInformation extends Component {

  renderInfoCardsForRoutes = (routesArray) => {
    if(routesArray !== []){
      if(routesArray === undefined){
      } else {
      return routesArray.map((route, index) => <Card route={route} id={index}/>)
      }
    }else{
    }
  }

  render() {
    return (
      <div>

        {this.props.driving ?  <button className='submit-or-select' onClick={() => this.props.handleDrivingSelect ('DRIVING')}>Car</button> : null}

        <br/>
        
        {this.props.bicycling ? <button className='submit-or-select' onClick={() => this.props.handleWalkingSelect('WALKING')}>On Foot</button> : null}
        
        <br/>
        
        {this.props.walking ?  <button className='submit-or-select' onClick={() => this.props.handlePublicTransportSelect('TRANSIT')}>Public Tranport</button> : null}
        
        <br/>
        
        {this.props.transit ?  <button className='submit-or-select' onClick={() => this.props.handleCyclingSelect('BICYCLING') }>Cycling</button>: null}

        <br/>
      
        <div className='remove-line'>
          {this.props.hitSubmit ?  null : <h1 className='search-to-see'>Search to see details!</h1> }
          {this.props.driving ? <h2>Driving</h2> : null}
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
