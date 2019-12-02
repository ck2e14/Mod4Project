import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {

  render() {
    return (
      <div className='ui embed'>
        <Map
          style={mapStyles}
          google={this.props.google}
          zoom={12}
          initialCenter={{
           lat: 51.508,
           lng: -0.13
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSDyNUIpUJXlUUkm2LfaG2wCLFVr1MFi4'
})(MapContainer);
