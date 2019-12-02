import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={12.5}
          initialCenter={{
           lat: 51.5074,
           lng: 0.1278
          }}
        />
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4KsBwrhZbB_bnjtmZi1x67YTMMWmtQuU'
})(MapContainer);
