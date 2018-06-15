import React from 'react';
import Map  from '../dashboard/map';
import {fetchBusinesses, setBusinessOnMap} from '../../actions/businesses_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    current_user: state.session.current_user,
    businesses: state.entities.businesses,
    current_business_id: state.ui.current_business_id
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
    }

    componentDidUpdate(prevProps){
        if(this.props.businesses.length > 0){
            for(let i = 0; i<this.props.businesses.length; i++){
                if(this.props.businesses[i].id == this.props.current_business_id){
                    this.props.setBusinessOnMap(this.props.businesses[i])
                    break;
                }
            }
        }
    }

    componentDidMount(){
        this.props.fetchBusinesses(this.props.current_user.id)
    }

    handleBusinessChange(e, business){
        e.preventDefault()
        this.props.setBusinessOnMap(business)
    }

    renderBusinessesList(){
        let businesses = []
        this.props.businesses.forEach((business) => {
            businesses.push(
                <button onClick={(e) => this.handleBusinessChange(e,business)}>{business.name}</button>
            )
        })
        return businesses
    }

    render(){
        return(
            <div>
                {this.renderBusinessesList()}
                <Map />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(SettingsTab);