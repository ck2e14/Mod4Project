import React, { Component } from 'react';
import { Mapp, GoogleApiWrapper } from 'google-maps-react';
import Map from './Map.js'


export class MapContainer extends Component {
  render() {
    const style = {
     width: '100vw',
     height: '100vh'
   }
    return (
      <div className='map-wrapper' style={style}>
        <Map
          google={this.props.google}
        />
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSDyNUIpUJXlUUkm2LfaG2wCLFVr1MFi4'
})(MapContainer);
