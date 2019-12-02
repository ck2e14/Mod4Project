import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4KsBwrhZbB_bnjtmZi1x67YTMMWmtQuU'
})(MapContainer);
