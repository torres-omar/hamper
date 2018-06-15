import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchStatusTickets, changeTicketStatus } from '../../actions/tickets_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
        if(this.props.location.pathname != "/tickets"){
            this.props.history.push('/tickets')
        } 
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={(e) => this.handleStatusChange(e, "unfulfilled")}>Unfulfilled</button>
                    <button onClick={(e) => this.handleStatusChange(e, "notified")}>Notified</button>
                    <button onClick={(e) => this.handleStatusChange(e, "fulfilled")}>Fulfilled</button>
                </div>
                <input type="button" onClick={this.handleSubmit} value="sign out" />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketsControl));