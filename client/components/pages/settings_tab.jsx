import React from 'react';
import Map  from '../dashboard/map';
import {fetchBusinesses, setBusinessOnMap} from '../../actions/businesses_actions';
import {connect} from 'react-redux';
import classNames from 'classnames';

const mapStateToProps = (state) => ({
    current_user: state.session.current_user,
    businesses: state.entities.businesses,
    current_business_id: state.ui.current_business_id,
    business_on_map: state.ui.business_on_map
})

const mapDispathToProps = (dispatch) => ({
    fetchBusinesses: (user_id) => dispatch(fetchBusinesses(user_id)),
    setBusinessOnMap: (business) => dispatch(setBusinessOnMap(business))
})


class SettingsTab extends React.Component{
    constructor(props){
        super(props)
        this.handleBusinessChange = this.handleBusinessChange.bind(this)
        this.renderBusinessesList = this.renderBusinessesList.bind(this)
        this.renderGoToButton = this.renderGoToButton.bind(this)
        this.setInitialBusinessOnMap = this.setInitialBusinessOnMap.bind(this)
    }

    setInitialBusinessOnMap(businesses){
        if (businesses.length > 0) {
            for(let i = 0; i<businesses.length; i++){
                if(businesses[i].id == this.props.current_business_id){
                    this.props.setBusinessOnMap(businesses[i])
                    break;
                }
            }
        }
    }

    componentDidMount(){
        this.props.fetchBusinesses(this.props.current_user.id).then(
            (response) => this.setInitialBusinessOnMap(response.businesses)
        )
    }

    handleBusinessChange(e, business){
        e.preventDefault()
        this.props.setBusinessOnMap(business)
    }

    renderBusinessesList(){
        let businesses = []
        this.props.businesses.forEach((business) => {
            businesses.push(
                <button className={classNames({ 'button__basic-active': this.props.business_on_map && (this.props.business_on_map.name == business.name), "button__basic-inactive": true })} 
                        onClick={(e) => this.handleBusinessChange(e,business)}>{business.name}</button>
            )
        })
        return businesses
    }

    renderGoToButton() {
        if (this.props.business_on_map && (this.props.current_business_id != this.props.business_on_map.id)) {
            return (
                <button onClick={this.handleRedirect}>Go to this location</button>
            )
        }
    }

    render(){
        let business_on_map_name;
        if(this.props.business_on_map){
            business_on_map_name = this.props.business_on_map.name;
        }
        return(
            <div className="dashboard__main-view dashboard__businesses-view">
                <div className="businesses__list"> 
                    Your businesses
                    {this.renderBusinessesList()}
                    <p>{business_on_map_name}</p>
                    {this.renderGoToButton()}
                </div>
                <Map />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(SettingsTab);