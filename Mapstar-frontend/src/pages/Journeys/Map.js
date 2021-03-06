import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { DirectionsRenderer, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSDyNUIpUJXlUUkm2LfaG2wCLFVr1MFi4&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className='map-wrapper' style={{ height: `100%` }} />,
  mapElement: <div className='map-wrapper' id='mapwrapper' style={{ height: `100%`}} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps !== this.props && this.props.origin && this.props.destination && this.props.selectedTransportMode) {
        const DirectionsService = new window.google.maps.DirectionsService();

        DirectionsService.route({
          origin: this.props.origin,
          destination: this.props.destination,
          travelMode: this.props.selectedTransportMode
        }, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
      }
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={new window.google.maps.LatLng(51.5197, -0.0878)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default class Map extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker()
  };

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 1000)
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  };

  render() {
    return (
      <MyMapComponent
        origin={this.props.origin}
        destination={this.props.destination}
        selectedTransportMode={this.props.selectedTransportMode}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}
