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
          zoom={14}
          initialCenter={{
           lat: 51.5130,
           lng: 0.1242
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4KsBwrhZbB_bnjtmZi1x67YTMMWmtQuU'
})(MapContainer);
