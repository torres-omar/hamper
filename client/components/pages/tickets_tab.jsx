import React from 'react'; 
import { logout } from '../../actions/session_actions';
import { fetchUnfulfilledTickets } from '../../actions/tickets_actions';
import { connect } from 'react-redux';
import TicketsView from '../dashboard/tickets_view';
import TicketsSearchBar from '../dashboard/ticket_search_bar';

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUnfulfilledTickets: (busines_id, page) => dispatch(fetchUnfulfilledTickets(busines_id, page))
})

const mapStateToProps = (state) => ({
    user: state.session.current_user
})

class TicketsTab extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // call fetchUnfulfilledTickets method with page 0
        let business_id = this.props.user.startup_business_id;
        this.props.fetchUnfulfilledTickets(business_id, 0);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.logout();
    }

    render(){
        return(
            <div>
                <h1>Tickets</h1> 
                <input type="button" onClick={this.handleSubmit} value="sign out"/>
                <TicketsSearchBar />
                <TicketsView />
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTab);