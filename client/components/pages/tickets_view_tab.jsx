import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';
import TicketSearchBar from '../dashboard/ticket_search_bar';
import { withRouter } from 'react-router-dom';

class TicketsViewTab extends React.Component{
    constructor(props){
        super(props)
        this.handleNewTicketRedirect = this.handleNewTicketRedirect.bind(this)
    }

    handleNewTicketRedirect() {
        // e.preventDefault()
        this.props.history.push('/tickets/new/s1')
    }

    // componentDidMount(){
    //     this.props.history.push('/tickets')
    // }

    render(){
        return(
            <div>
                <TicketsControl />
                <input type="button" onClick={this.handleNewTicketRedirect} value="new ticket" />
                <TicketSearchBar />
                <TicketsView />
            </div>
        )
    }
}

export default withRouter(TicketsViewTab);