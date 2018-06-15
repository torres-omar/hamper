import React from "react"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Gmap from './gmap.jsx'

class Map extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            isMarkerShown: false
        }
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker(){
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 2000)
    }

    render() {
        return (
            <Gmap
                isMarkerShown={this.state.isMarkerShown}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlSl5E7PM9Y53o0ocaXvYoemswM3CpmLw"
                loadingElement={< div style={{ height: `100%` }} />}
                containerElement={< div style={{ height: `400px`, width: '400px' }} />}
                mapElement={< div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Map