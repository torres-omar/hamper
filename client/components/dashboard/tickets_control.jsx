import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchStatusTickets } from '../../actions/tickets_actions';
import { connect } from 'react-redux';
import TicketsSearchBar from '../dashboard/ticket_search_bar';

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStatusTickets: (busines_id, page, status) => dispatch(fetchStatusTickets(busines_id, page, status)),
})

const mapStateToProps = (state) => ({
    user: state.session.current_user
})

class TicketsControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            ticket_status: 'unfulfilled'
        }
    }
    // fetch new status tickets upon changing state (ticket_status) 
    // new tickets will go through redux and be stored in entities.tickets
    // other components react to this change in the store.
    // such as tickets view, which renders tickets stored in the store (entities.tickets)
    componentDidUpdate(prevProps, prevState) {
        if (this.state.ticket_status != prevState.ticket_status) {
            let id = this.props.user.startup_business_id
            let status = this.state.ticket_status
            this.props.fetchStatusTickets(id, 0, status)
        }
    }

    componentDidMount() {
        // call fetchStatusTickets method with page 0
        let business_id = this.props.user.startup_business_id;
        this.props.fetchStatusTickets(business_id, 0, this.state.ticket_status);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logout();
    }

    handleStatusChange(e, status) {
        e.preventDefault()
        this.setState({ ticket_status: status })
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
                <TicketsSearchBar status={this.state.ticket_status} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsControl);