import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

class Gmap extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            // default_center: { lat: 40.7484, lng: -73.9967 },
            // center: { lat: 40.7484, lng: -73.9967 },
            // markers: []
        }

    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.business_on_map &&         
    //         (this.props.business_on_map.id != prevProps.business_on_map.id)){
    //         this.setState({ center: {
    //             lat: Number(this.props.business_on_map.latitude), 
    //             lng: Number(this.props.business_on_map.longitude)
    //         }})
    //     }
    // }

    mapLoaded(map) {
        if (this.state.map == null) {
            this.setState({ map: map })
        }
    }

    render() {
        let marker_view = <Marker
            position={{ lat: Number(this.props.business_on_map.latitude), lng: Number(this.props.business_on_map.longitude) }}
        />
        return (
            <GoogleMap
                ref={this.mapLoaded.bind(this)}
                defaultZoom={13}
                defaultCenter={this.state.default_center}
                center={this.props.center}
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