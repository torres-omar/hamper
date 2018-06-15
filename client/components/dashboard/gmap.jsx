import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

class Gmap extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            default_center: { lat: 40.7484, lng: -73.9967 },
            center: { lat: 40.7484, lng: -73.9967 },
            markers: []
        }

    }

    mapLoaded(map) {
        if (this.state.map == null) {
            this.setState({ map: map })
        }
    }

    render() {
        let marker_view = <Marker
            position={{ lat: 40.7484, lng: -73.9967 }}
        />
        return (
            <GoogleMap
                ref={this.mapLoaded.bind(this)}
                defaultZoom={13}
                defaultCenter={this.state.default_center}
                center={this.state.center}
                defaultOptions={{
                    styles: [{
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [
                            { visibility: "off" }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "all",
                        stylers: [
                            { visibility: "off" }
                        ]
                    },
                    {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [
                            { visibility: "off" }
                        ]
                    }],
                    streetViewControl: false,
                    mapTypeControl: false
                }}
            >
                {this.props.isMarkerShown && marker_view}
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Gmap))