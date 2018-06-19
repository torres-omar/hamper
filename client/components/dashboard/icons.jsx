import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import classNames from 'classnames';

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

class Icons extends React.Component{
    constructor(props){
        super(props)

        this.toTickets = this.toTickets.bind(this)
        this.toBusinesses = this.toBusinesses.bind(this)
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    toTickets(){
        this.props.history.push('/dashboard/tickets')
    }

    toBusinesses(){
        this.props.history.push('/dashboard/businesses')
    }

    handleSignOut(){
        this.props.logout()
    }

    render(){
        return(
            <div className="sidebar">
                <i className={classNames({ "sidebar__button": true, 'fa-ticket-alt':true, 'fas': true, 'sidebar__button-active': this.props.location.pathname.includes('tickets')})} onClick={this.toTickets}></i>
                <i className={classNames({ "fas fa-briefcase sidebar__button": true, 'sidebar__button-active': this.props.location.pathname.includes('businesses')})} onClick={this.toBusinesses}></i>
                <i className="fas fa-power-off sidebar__button" onClick={this.handleSignOut}></i>
            </div>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Icons));