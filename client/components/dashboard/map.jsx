import React from "react"
import Gmap from './gmap.jsx'
import { connect } from 'react-redux';
import { changeCurrentBusinessId } from '../../actions/businesses_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
    business_on_map: state.ui.business_on_map,
    current_business_id: state.ui.current_business_id
})


const mapDispatchToProps = (dispatch) => ({
    changeCurrentBusinessId: (id) => dispatch(changeCurrentBusinessId(id))
})

class Map extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            isMarkerShown: false
        }
        this.renderGoToButton = this.renderGoToButton.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker(){
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 2000)
    }

    handleRedirect(e){
        e.preventDefault()
        this.props.changeCurrentBusinessId(this.props.business_on_map.id)
        this.props.history.push('/tickets')
    }

    renderGoToButton(){
        if(this.props.current_business_id != this.props.business_on_map.id){
            return(
                <button onClick={this.handleRedirect}>Go to this location</button>
            )
        }
    }

    render() {
        if(this.props.business_on_map){
            return (
                <div>
                    <p>{this.props.business_on_map.name}</p>
                    {this.renderGoToButton()}
                    <Gmap
                        isMarkerShown={this.state.isMarkerShown}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlSl5E7PM9Y53o0ocaXvYoemswM3CpmLw"
                        loadingElement={< div style={{ height: `100%` }} />}
                        containerElement={< div style={{ height: `400px`, width: '400px' }} />}
                        mapElement={< div style={{ height: `100%` }} />}
                        center={{lat: Number(this.props.business_on_map.latitude), lng: Number(this.props.business_on_map.longitude)}}
                        business_on_map={this.props.business_on_map}
                    />
                </div>
            )
        }else{
            return (
                <div> 
                </div>
            )
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map))