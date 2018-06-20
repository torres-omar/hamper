import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchStatusTickets, changeTicketStatus } from '../../actions/tickets_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
// var classNames = require('classnames');

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStatusTickets: (busines_id, page, status) => dispatch(fetchStatusTickets(busines_id, page, status)),
    changeTicketStatus: (status) => dispatch(changeTicketStatus(status))
})

const mapStateToProps = (state) => ({
    user: state.session.current_user,
    current_business_id: state.ui.current_business_id,
    current_ticket_status: state.ui.current_ticket_status
})

class TicketsControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewTicketRedirect = this.handleNewTicketRedirect.bind(this)
    }
    // fetch new status tickets upon changing state (ticket_status) 
    // new tickets will go through redux and be stored in entities.tickets
    // other components react to this change in the store.
    // such as tickets view, which renders tickets stored in the store (entities.tickets)
    componentDidUpdate(prevProps) {
        if (this.props.current_ticket_status != prevProps.current_ticket_status) {
            let id = this.props.current_business_id
            let status = this.props.current_ticket_status
            this.props.fetchStatusTickets(id, 0, status)
        }
    }

    componentDidMount() {
        // call fetchStatusTickets method with page 0
        let business_id = this.props.current_business_id;
        this.props.fetchStatusTickets(business_id, 0, this.props.current_ticket_status);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logout();
    }

    handleStatusChange(e, status) {
        e.preventDefault()
        this.props.changeTicketStatus(status)
        if(this.props.location.pathname != "/dashboard/tickets"){
            this.props.history.push('/dashboard/tickets')
        } 
    }

    handleNewTicketRedirect() {
        // e.preventDefault()
        this.props.history.push('/dashboard/new-ticket-s1')
    }

    render() {

        return (
            <div className="tickets-control">
                <div className={classNames({ 'button__basic-active': this.props.current_ticket_status == "unfulfilled", "button__container": true})} onClick={(e) => this.handleStatusChange(e, "unfulfilled")}>
                    <button className="button__basic-inactive">Unfulfilled</button>
                </div>
                <div className={classNames({ 'button__basic-active': this.props.current_ticket_status == "notified", "button__container": true })} onClick={(e) => this.handleStatusChange(e, "notified")}>
                    <button className="button__basic-inactive">Notified</button>
                </div>
                <div className={classNames({ 'button__basic-active': this.props.current_ticket_status == "fulfilled", "button__container": true })} onClick={(e) => this.handleStatusChange(e, "fulfilled")}>
                    <button className="button__basic-inactive">Fulfilled</button>
                </div>
                <div className="tickets-control__new-ticket-area">
                    <div className="tickets-control__new-ticket-button" onClick={this.handleNewTicketRedirect}><i className="fas fa-plus"></i></div>
                    <p>new ticket</p>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketsControl));