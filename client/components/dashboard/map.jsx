import React from "react"
import Gmap from './gmap.jsx'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    business_on_map: state.ui.business_on_map
})


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
        if(this.props.business_on_map){
            return (
                <Gmap
                    isMarkerShown={this.state.isMarkerShown}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlSl5E7PM9Y53o0ocaXvYoemswM3CpmLw"
                    loadingElement={< div style={{ height: `100%` }} />}
                    containerElement={< div style={{ height: `400px`, width: '400px' }} />}
                    mapElement={< div style={{ height: `100%` }} />}
                    center={{lat: Number(this.props.business_on_map.latitude), lng: Number(this.props.business_on_map.longitude)}}
                    business_on_map={this.props.business_on_map}
                />
            )
        }else{
            return (
                <div> 
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, null)(Map)